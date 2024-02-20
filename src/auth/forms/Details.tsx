import { Button, Input } from "@material-tailwind/react";
const Details = () => {
  return (
      <div className="detail-container">
        <h3 className="txt-1">Check your details</h3>
        <h4 className="txt-2">We know you</h4>
        <div className="flex flex-col gap-6 detail-card">
          <span id="color"><Input variant="standard"  label="Name" placeholder="Lecturer name" /**value={"name"}**/ crossOrigin={undefined} readOnly/></span>
          <span id="color"><Input variant="standard"  label="Employee ID" placeholder="SS0785" /**value={"name"}**/ crossOrigin={undefined} readOnly/></span>
          <span id="color"><Input variant="standard"  label="Department" placeholder="Computer Science Engineering" /**value={"name"}**/ crossOrigin={undefined} readOnly/></span>
          <span id="color"><Input variant="standard"  label="Email" placeholder="lecturername@nmit.com" crossOrigin={undefined} /**value={"name"}**/ readOnly/></span>
          <Button children={"Procced"} placeholder={undefined} className="btn-proceed"></Button>
        </div>
        <h5 className="txt-3">*Details in this page are not editable. Please write us to <a href="mailto:countedin.app@gmail.com" className="link">countedin.app@gmail.com</a>  if incorrect details are displayed.</h5>
      </div>
    
  )
}

export default Details