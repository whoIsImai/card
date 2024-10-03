import React, { useState } from "react"
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
import './first.css';

    const DownloadPDF = ({ compInfo }) => {
        const generatePDF = () => {
            const input = document.getElementById('pdf-content');
            html2canvas(input, { scale: 2 }).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgWidth = 190; // Width of the image in mm
                const pageHeight = pdf.internal.pageSize.height;
                const pdfWidth = pdf.internal.pageSize.width; // PDF width
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
                // Calculate X position to center the image
                const xPosition = (pdfWidth - imgWidth) / 2;
        
                let position = 0;
        
                // Add the image to the PDF at the calculated X position
                pdf.addImage(imgData, 'PNG', xPosition, position, imgWidth, imgHeight);

                pdf.save('Business card.pdf');
            });
        };
        return (
            <div>
                <button onClick={generatePDF}>Download PDF</button>
                <h4>Preview</h4>
                <div id="pdf-content">
                    {/* For The Front */}
                    <div className="front">
                        <h1 className="compname">{compInfo.cpname}</h1>
                        <h2 className="slogan">{compInfo.slogan}</h2>
                    </div>
                    {/* For The Back */}
                    <div className="back">
                        <div className="others">
                            <h2>{compInfo.founder}</h2>
                            <h3>{compInfo.cpname}</h3>
                            <label>{compInfo.number}</label><br />
                            <label>{compInfo.email}</label><br />
                            <label>{compInfo.llocation}</label><br />
                            <label>{compInfo.city}</label>
                        </div>
                    </div>
                </div>
            </div>
        );
}
function Ffirst(){
    const [compInfo, setcompInfo] = useState({})

    const handleChange = (event) =>{
      const name = event.target.name
      const value = event.target.value
     setcompInfo(values =>({...values, [name] : value}))
    }
    return(
        <div className='inputs'>
        <input type='text' placeholder='Company name' name='cpname' onChange={handleChange} value={compInfo.name}/><br></br>
        <input type='text' placeholder='Slogan' name='slogan' onChange={handleChange} value={compInfo.name}/><br></br>
        <input type='text' placeholder='Founder' name="founder" onChange={handleChange}value={compInfo.name} /><br></br>
        <input type='text' placeholder="number" name="number" onChange={handleChange}value={compInfo.name} /><br></br>
        <input type='email' placeholder="email" name="email" onChange={handleChange}value={compInfo.name} /><br></br>
        <input type='text' placeholder="location" name="llocation" onChange={handleChange} value={compInfo.name}/><br></br>
        <input type='text' placeholder="city" name="city" onChange={handleChange} value={compInfo.name}/><br></br>
        <DownloadPDF compInfo={compInfo}/>
      </div>

      
    )
}

export default Ffirst