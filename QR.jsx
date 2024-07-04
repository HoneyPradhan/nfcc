import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import './QR.css';

const QRGenerator = () => {
  const [inputType, setInputType] = useState('url');
  const [input, setInput] = useState('');
  const [inputSize, setInputSize] = useState(250);
  const [isNFCEnabled, setIsNFCEnabled] = useState(false);
  const [nfcData, setNfcData] = useState('');
  const [nfcRead, setNfcRead] = useState(false);
  const [nfcWriteData, setNfcWriteData] = useState('');
  const [showNFCWriteInput, setShowNFCWriteInput] = useState(false);
  const [nfcWriteType, setNfcWriteType] = useState('url');

  useEffect(() => {
    if ('nfc' in navigator) {
      setIsNFCEnabled(true);
      navigator.nfc.addEventListener('reading', handleNFCRead);
    } else {
      console.log('NFC is not supported on this device.');
    }

    return () => {
      if ('nfc' in navigator) {
        navigator.nfc.removeEventListener('reading', handleNFCRead);
      }
    };
  }, []);

  const handleNFCRead = (event) => {
    const tag = event?.message?.records[0];
    if (tag) {
      const tagData = new TextDecoder().decode(tag.data);
      setNfcData(tagData);
      setNfcRead(true);
      console.log('Scanned NFC data:', tagData);
    }
  };

  const handleNFCWrite = () => {
    if (isNFCEnabled) {
      let dataToWrite = '';

     
      switch (nfcWriteType) {
        case 'url':
          dataToWrite = `URL: ${nfcWriteData}`;
          break;
        case 'email':
          dataToWrite = `Email: ${nfcWriteData}`;
          break;
        case 'whatsapp':
          dataToWrite = `Whatsapp: ${nfcWriteData}`;
          break;
        case 'text':
          dataToWrite = `Text: ${nfcWriteData}`;
          break;
        default:
          dataToWrite = nfcWriteData;
          break;
      }

      const message = {
        records: [
          { recordType: 'text', data: new TextEncoder().encode(dataToWrite) }
        ]
      };

      navigator.nfc.push(message)
        .then(() => {
          console.log('Data written to NFC tag:', dataToWrite);
          setNfcWriteData('');
        })
        .catch((error) => {
          console.error('Error writing data to NFC tag:', error);
        });
    } else {
      console.log('NFC is not enabled or supported on this device.');
    }
  };

  const handleButtonClick = (type) => {
    setInputType(type);
    setInput('');
    setNfcRead(false); 
    setShowNFCWriteInput(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSizeChange = (e) => {
    setInputSize(Number(e.target.value));
  };

  const handleScanNFC = () => {
    if (isNFCEnabled) {
      navigator.nfc?.requestPresent()
        .then(() => console.log('NFC scanning initiated'))
        .catch((error) => console.error('Error initiating NFC scan:', error));
    } else {
      console.log('NFC is not enabled or supported on this device.');
    }
  };

  const handleNFCWriteTypeChange = (e) => {
    setNfcWriteType(e.target.value);
  };

  const handleNFCWriteInputChange = (e) => {
    setNfcWriteData(e.target.value);
  };

  const handleNFCWriteGo = () => {
    if (isNFCEnabled) {
      handleNFCWrite();
      setShowNFCWriteInput(false);
    } else {
      console.log('NFC is not enabled or supported on this device.');
    }
  };

  return (
    <div className="qr-container">
      <header className="header">
        <h1>QR Code Generator</h1>
      </header>
    <div id="main">
      
      <div id="options">
        <button onClick={() => handleButtonClick('url')}>URL</button>
        <button onClick={() => handleButtonClick('email')}>Email</button>
        <button onClick={() => handleButtonClick('whatsapp')}>Whatsapp</button>
        <button onClick={() => handleButtonClick('text')}>Text</button>
        <button onClick={() => handleButtonClick('wifi')}>Wifi</button>
        <button onClick={() => handleButtonClick('location')}>Location</button>
      </div>
      <div id="tools">
        
        {inputType === 'email' && (
          <div className="Email active">
            <label>Email:</label>
            <input type="email" onChange={handleInputChange} placeholder="Enter Email ID" />
            <label>Size of QR code:</label>
            <input type="number" onChange={handleSizeChange} placeholder="Enter the desired size" />
          </div>
        )}
        {inputType === 'url' && (
          <div className="URL active">
            <label>URL:</label>
            <input type="text" onChange={handleInputChange} placeholder="Enter the URL" />
            <label>Size:</label>
            <input type="number" onChange={handleSizeChange} placeholder="Enter the desired size" />
          </div>
        )}
        
      </div>
      <div id="qrCode">
        <h2>Scan Me</h2>
        <QRCode value={input} size={inputSize} bgColor="white" />
      </div>
      <div id="nfcSection">
        <h2>NFC Tools</h2>
        <div className="nfc-actions">
          <button onClick={handleScanNFC}>Read NFC Data</button>
          <div>
            <label>Select data type:</label>
            <select value={nfcWriteType} onChange={handleNFCWriteTypeChange}>
              <option value="url">URL</option>
              <option value="email">Email</option>
              <option value="whatsapp">Whatsapp</option>
              <option value="text">Text</option>
              <option value ="wifi">wifi</option>
              <option value ="location">Location</option>
             
            </select>
          </div>
          <button onClick={() => setShowNFCWriteInput(true)}>Write to NFC Tag</button>
          {showNFCWriteInput && (
            <div>
              <input type="text" value={nfcWriteData} onChange={handleNFCWriteInputChange} placeholder="Enter data to write" />
              <button onClick={handleNFCWriteGo}>Go</button>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default QRGenerator;

