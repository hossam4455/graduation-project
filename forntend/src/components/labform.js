import React, { Component } from "react";


 class Labform extends Component{
    render(){
        return(
            <div>
                <div className="form">

<div className="form-left">
    <form action="post">
        <label className="name-form" for="name lname">name :</label><br/>
        <input type="text" className="fname" id="name" placeholder="first name" required/>
        <input type="text" className="lname" id="lname" placeholder="last name" required/> <br/>
        <label for="ph">phone</label><br/>
        <input type="tel" className="phone-number" id="ph" placeholder="01146650211" required/> <br/>
        <label for="em">email</label><br/>
        <input type="text" className="email" id="em" placeholder="ayman2548@gmail.com" required/> <br/>
        <label for="exp">Explain disease</label><br/>
        <textarea name="" id="exp" cols="20" rows="5"></textarea>
        <input type="submit" className="submit" value="send"/>
    </form>
</div>
<div className="form-right">
    <h2>Please enter your data </h2>
    <p> So that we can communicate with you and learn about your medical condition and what type of medical
        analysis you need</p>
</div>
</div>
            </div>
        )}}
export default Labform