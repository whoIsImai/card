import React, { useState } from "react"
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
import './sec.css'


const DownloadPDF = ({ compInfo }) => {
  const generatePDF = () => {
    const input = document.getElementById('pdf-content2');
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
      <div id="pdf-content2">
              <div className="front2">
                <h1 className="cpnname2">{compInfo.cpname}</h1>
                <h1 className="slog2">{compInfo.slogan}</h1>
              </div>
        
        
        <div className="back2">
            <div className="back22">
                <h2 className="founder2">{compInfo.founder}</h2>
                <h3 className="cmtp">{compInfo.TypeComp}</h3>
                <div className="other2">
                    <label>{compInfo.number}</label><br></br>
                    <label>{compInfo.email}</label><br></br>
                    <label>{compInfo.llocation}</label><br></br>
                    <label>{compInfo.city}</label>
                </div>
            </div>
        </div>
      </div>
</div>)
}


function Sec(){
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
        <input type='text' placeholder='Type of company' name='TypeComp' onChange={handleChange} value={compInfo.name}/><br></br>
        <input type='text' placeholder="number" name="number" onChange={handleChange}value={compInfo.name} /><br></br>
        <input type='email' placeholder="email" name="email" onChange={handleChange}value={compInfo.name} /><br></br>
        <input type='text' placeholder="location" name="llocation" onChange={handleChange} value={compInfo.name}/><br></br>
        <input type='text' placeholder="city" name="city" onChange={handleChange} value={compInfo.name}/><br></br>
        <DownloadPDF compInfo={compInfo}/>
      </div>
    )
}

export default Sec