// import React, { useState, useEffect } from "react";
// import './NFC.css';

// const NFCComponent = () => {
//   const [isNFCEnabled, setIsNFCEnabled] = useState(false);
//   const [nfcData, setNfcData] = useState('');
//   const [nfcRead, setNfcRead] = useState(false);
//   const [nfcWriteData, setNfcWriteData] = useState('');
//   const [showNFCWriteInput, setShowNFCWriteInput] = useState(false);
//   const [nfcWriteType, setNfcWriteType] = useState('url');

//   useEffect(() => {
//     if ('nfc' in navigator) {
//       setIsNFCEnabled(true);
//       navigator.nfc.addEventListener('reading', handleNFCRead);
//     } else {
//       console.log('NFC is not supported on this device.');
//     }

//     return () => {
//       if ('nfc' in navigator) {
//         navigator.nfc.removeEventListener('reading', handleNFCRead);
//       }
//     };
//   }, []);

//   const handleNFCRead = (event) => {
//     const tag = event?.message?.records[0];
//     if (tag) {
//       const tagData = new TextDecoder().decode(tag.data);
//       setNfcData(tagData);
//       setNfcRead(true);
//       console.log('Scanned NFC data:', tagData);
//     }
//   };

//   const handleNFCWrite = () => {
//     if (isNFCEnabled) {
//       let dataToWrite = '';

//       switch (nfcWriteType) {
//         case 'url':
//           dataToWrite = `URL: ${nfcWriteData}`;
//           break;
//         case 'email':
//           dataToWrite = `Email: ${nfcWriteData}`;
//           break;
//         case 'whatsapp':
//           dataToWrite = `Whatsapp: ${nfcWriteData}`;
//           break;
//         case 'text':
//           dataToWrite = `Text: ${nfcWriteData}`;
//           break;
//         default:
//           dataToWrite = nfcWriteData;
//           break;
//       }

//       const message = {
//         records: [
//           { recordType: 'text', data: new TextEncoder().encode(dataToWrite) }
//         ]
//       };

//       navigator.nfc.push(message)
//         .then(() => {
//           console.log('Data written to NFC tag:', dataToWrite);
//           setNfcWriteData('');
//         })
//         .catch((error) => {
//           console.error('Error writing data to NFC tag:', error);
//         });
//     } else {
//       console.log('NFC is not enabled or supported on this device.');
//     }
//   };

//   const handleScanNFC = () => {
//     if (isNFCEnabled) {
//       navigator.nfc?.requestPresent()
//         .then(() => console.log('NFC scanning initiated'))
//         .catch((error) => console.error('Error initiating NFC scan:', error));
//     } else {
//       console.log('NFC is not enabled or supported on this device.');
//     }
//   };

//   const handleNFCWriteTypeChange = (e) => {
//     setNfcWriteType(e.target.value);
//   };

//   const handleNFCWriteInputChange = (e) => {
//     setNfcWriteData(e.target.value);
//   };

//   const handleNFCWriteGo = () => {
//     if (isNFCEnabled) {
//       handleNFCWrite();
//       setShowNFCWriteInput(false);
//     } else {
//       console.log('NFC is not enabled or supported on this device.');
//     }
//   };

//   return (
//     <div className="nfc-container">
//       <h2>NFC Tools</h2>
//       <div className="nfc-actions">
//         <button onClick={handleScanNFC}>Read NFC Data</button>
//         <div>
//           <label>Select data type:</label>
//           <select value={nfcWriteType} onChange={handleNFCWriteTypeChange}>
//             <option value="url">URL</option>
//             <option value="email">Email</option>
//             <option value="whatsapp">Whatsapp</option>
//             <option value="text">Text</option>
//             <option value ="wifi">wifi</option>
//             <option value ="location">Location</option>
//           </select>
//         </div>
//         <button onClick={() => setShowNFCWriteInput(true)}>Write to NFC Tag</button>
//         {showNFCWriteInput && (
//           <div>
//             <input type="text" value={nfcWriteData} onChange={handleNFCWriteInputChange} placeholder="Enter data to write" />
//             <button onClick={handleNFCWriteGo}>Go</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NFCComponent;
// import React, { useState, useEffect } from "react";
// import './NFC.css';

// const NFCComponent = () => {
//   const [isNFCEnabled, setIsNFCEnabled] = useState(false);
//   const [nfcData, setNfcData] = useState('');
//   const [nfcRead, setNfcRead] = useState(false);
//   const [nfcWriteData, setNfcWriteData] = useState('');
//   const [showNFCWriteInput, setShowNFCWriteInput] = useState(false);
//   const [nfcWriteType, setNfcWriteType] = useState('url');

//   useEffect(() => {
//     if ('nfc' in navigator) {
//       setIsNFCEnabled(true);
//       navigator.nfc.addEventListener('reading', handleNFCRead);
//     } else {
//       console.log('NFC is not supported on this device.');
//     }

//     return () => {
//       if ('nfc' in navigator) {
//         navigator.nfc.removeEventListener('reading', handleNFCRead);
//       }
//     };
//   }, []);

//   const handleNFCRead = (event) => {
//     const tag = event?.message?.records[0];
//     if (tag) {
//       const tagData = new TextDecoder().decode(tag.data);
//       setNfcData(tagData);
//       setNfcRead(true);
//       console.log('Scanned NFC data:', tagData);
//     }
//   };

//   const handleNFCWrite = () => {
//     if (isNFCEnabled) {
//       let dataToWrite = '';

//       switch (nfcWriteType) {
//         case 'url':
//           dataToWrite = `URL: ${nfcWriteData}`;
//           break;
//         case 'email':
//           dataToWrite = `Email: ${nfcWriteData}`;
//           break;
//         case 'whatsapp':
//           dataToWrite = `Whatsapp: ${nfcWriteData}`;
//           break;
//         case 'text':
//           dataToWrite = `Text: ${nfcWriteData}`;
//           break;
//         case 'wifi':
//           dataToWrite = `WiFi: ${nfcWriteData}`;
//           break;
//         case 'location':
//           dataToWrite = `Location: ${nfcWriteData}`;
//           break;
//         default:
//           dataToWrite = nfcWriteData;
//           break;
//       }

//       const message = {
//         records: [
//           { recordType: 'text', data: new TextEncoder().encode(dataToWrite) }
//         ]
//       };

//       navigator.nfc.push(message)
//         .then(() => {
//           console.log('Data written to NFC tag:', dataToWrite);
//           setNfcWriteData('');
//         })
//         .catch((error) => {
//           console.error('Error writing data to NFC tag:', error);
//         });
//     } else {
//       console.log('NFC is not enabled or supported on this device.');
//     }
//   };

//   const handleScanNFC = () => {
//     if (isNFCEnabled) {
//       navigator.nfc?.requestPresent()
//         .then(() => console.log('NFC scanning initiated'))
//         .catch((error) => console.error('Error initiating NFC scan:', error));
//     } else {
//       console.log('NFC is not enabled or supported on this device.');
//     }
//   };

//   const handleNFCWriteTypeChange = (e) => {
//     setNfcWriteType(e.target.value);
//   };

//   const handleNFCWriteInputChange = (e) => {
//     setNfcWriteData(e.target.value);
//   };

//   const handleNFCWriteGo = () => {
//     if (isNFCEnabled) {
//       handleNFCWrite();
//       setShowNFCWriteInput(false);
//     } else {
//       console.log('NFC is not enabled or supported on this device.');
//     }
//   };

//   return (
//     <div className="nfc-container">
//       <h2>NFC Tools</h2>
//       <div className="nfc-form">
//         <div className="nfc-input">
//           <label>Select data type:</label>
//           <select value={nfcWriteType} onChange={handleNFCWriteTypeChange}>
//             <option value="url">URL</option>
//             <option value="email">Email</option>
//             <option value="whatsapp">Whatsapp</option>
//             <option value="text">Text</option>
//             <option value="wifi">WiFi</option>
//             <option value="location">Location</option>
//           </select>
//         </div>
//         <div className="nfc-input">
//           <input type="text" value={nfcWriteData} onChange={handleNFCWriteInputChange} placeholder="Enter data to write" />
//         </div>
//         <div className="nfc-actions">
          
//           <button onClick={() => setShowNFCWriteInput(true)}>Write to NFC Tag</button>
//           {showNFCWriteInput}
//           <button onClick={handleScanNFC} >Read NFC Data</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NFCComponent;
// import React, { useState, useEffect } from "react";
// import './NFC.css';

// const NFCComponent = () => {
//   const [isNFCEnabled, setIsNFCEnabled] = useState(false);
//   const [nfcData, setNfcData] = useState('');
//   const [showNFCWriteInput, setShowNFCWriteInput] = useState(false);
//   const [nfcWriteData, setNfcWriteData] = useState('');
//   const [nfcWriteType, setNfcWriteType] = useState('url');

//   useEffect(() => {
//     if ('nfc' in navigator) {
//       setIsNFCEnabled(true);
//       navigator.nfc.addEventListener('reading', handleNFCRead);
//     } else {
//       console.log('NFC is not supported on this device.');
//     }

//     return () => {
//       if ('nfc' in navigator) {
//         navigator.nfc.removeEventListener('reading', handleNFCRead);
//       }
//     };
//   }, []);

//   const handleNFCRead = (event) => {
//     const tag = event?.message?.records[0];
//     if (tag) {
//       const tagData = new TextDecoder().decode(tag.data);
//       setNfcData(tagData);
//       console.log('Scanned NFC data:', tagData);
//       // Redirect to register page after reading NFC data
//       window.location.href = '/register';
//     }
//   };

//   const handleNFCWrite = () => {
//     if (isNFCEnabled) {
//       let dataToWrite = '';

//       switch (nfcWriteType) {
//         case 'url':
//           dataToWrite = `URL: ${nfcWriteData}`;
//           break;
//         case 'email':
//           dataToWrite = `Email: ${nfcWriteData}`;
//           break;
//         case 'whatsapp':
//           dataToWrite = `Whatsapp: ${nfcWriteData}`;
//           break;
//         case 'text':
//           dataToWrite = `Text: ${nfcWriteData}`;
//           break;
//         case 'wifi':
//           dataToWrite = `WiFi: ${nfcWriteData}`;
//           break;
//         case 'location':
//           dataToWrite = `Location: ${nfcWriteData}`;
//           break;
//         default:
//           dataToWrite = nfcWriteData;
//           break;
//       }

//       const message = {
//         records: [
//           { recordType: 'text', data: new TextEncoder().encode(dataToWrite) }
//         ]
//       };

//       navigator.nfc.push(message)
//         .then(() => {
//           console.log('Data written to NFC tag:', dataToWrite);
//           setNfcWriteData('');
//           // Redirect to register page after writing to NFC tag
//           window.location.href = '/register';
//         })
//         .catch((error) => {
//           console.error('Error writing data to NFC tag:', error);
//         });
//     } else {
//       console.log('NFC is not enabled or supported on this device.');
//     }
//   };

//   const handleNFCWriteTypeChange = (e) => {
//     setNfcWriteType(e.target.value);
//   };

//   const handleNFCWriteInputChange = (e) => {
//     setNfcWriteData(e.target.value);
//   };

//   const handleNFCWriteGo = () => {
//     if (isNFCEnabled) {
//       handleNFCWrite();
//       setShowNFCWriteInput(false);
//     } else {
//       console.log('NFC is not enabled or supported on this device.');
//     }
//   };

//   const handleScanNFC = () => {
//     if (isNFCEnabled) {
//       navigator.nfc?.requestPresent()
//         .then(() => {
//           console.log('NFC scanning initiated');
//           // Redirect to register page after initiating NFC scan
//           window.location.href = '/register';
//         })
//         .catch((error) => console.error('Error initiating NFC scan:', error));
//     } else {
//       console.log('NFC is not enabled or supported on this device.');
//     }
//   };

//   return (
//     <div className="nfc-container">
//       <h2>NFC Tools</h2>
//       <div className="nfc-form">
//         <div className="nfc-input">
//           <label>Select data type:</label>
//           <select value={nfcWriteType} onChange={handleNFCWriteTypeChange}>
//             <option value="url">URL</option>
//             <option value="email">Email</option>
//             <option value="whatsapp">Whatsapp</option>
//             <option value="text">Text</option>
//             <option value="wifi">WiFi</option>
//             <option value="location">Location</option>
//           </select>
//         </div>
//         <div className="nfc-input">
//           <input type="text" value={nfcWriteData} onChange={handleNFCWriteInputChange} placeholder="Enter data to write" />
//         </div>
//         <div className="nfc-actions">
//           <button onClick={() => setShowNFCWriteInput(true)}>Write to NFC Tag</button>
//           {showNFCWriteInput && (
//             <button onClick={handleNFCWriteGo}>Go</button>
//           )}
//           <button onClick={handleScanNFC}>Read NFC Data</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NFCComponent;
import React, { useState, useEffect } from "react";
import './NFC.css';

const NFCComponent = () => {
  const [isNFCEnabled, setIsNFCEnabled] = useState(false);
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
      console.log('Scanned NFC data:', tagData);
      // Redirect to register page after reading NFC data
      window.location.href = '/register'; // Use window.location.href for redirection
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
        case 'wifi':
          dataToWrite = `WiFi: ${nfcWriteData}`;
          break;
        case 'location':
          dataToWrite = `Location: ${nfcWriteData}`;
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
          // Redirect to register page after writing to NFC tag
          window.location.href = '/register'; // Use window.location.href for redirection
        })
        .catch((error) => {
          console.error('Error writing data to NFC tag:', error);
        });
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

  const handleScanNFC = () => {
    if (isNFCEnabled) {
      navigator.nfc?.requestPresent()
        .then(() => {
          console.log('NFC scanning initiated');
          // Redirect to register page after initiating NFC scan
          window.location.href = '/register'; // Use window.location.href for redirection
        })
        .catch((error) => console.error('Error initiating NFC scan:', error));
    } else {
      console.log('NFC is not enabled or supported on this device.');
    }
  };

  return (
    <div className="nfc-container">
      <h2>NFC Tools</h2>
      <div className="nfc-form">
        <div className="nfc-input">
          <label >Select data type:</label>
          <select value={nfcWriteType} onChange={handleNFCWriteTypeChange}>
            <option value="url">URL</option>
            <option value="email">Email</option>
            <option value="whatsapp">Whatsapp</option>
            <option value="text">Text</option>
            <option value="wifi">WiFi</option>
            <option value="location">Location</option>
          </select>
        </div>
        <div className="nfc-input">
          <input type="text" value={nfcWriteData} onChange={handleNFCWriteInputChange} placeholder="Enter data to write" />
        </div>
        <div className="nfc-actions">
          <button onClick={() => setShowNFCWriteInput(true)}>Write to NFC Tag</button>
          <button onClick={handleScanNFC}>Read NFC Data</button>
        </div>
      </div>
    </div>
  );
};

export default NFCComponent;
