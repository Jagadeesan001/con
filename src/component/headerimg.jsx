import imgitm_1 from "../assect/mainimg_2.jpg";

function Headerimag(){
    
    return(
        <div>
            <img src={imgitm_1} className="max-h-fit border m-2 rounded" alt=""/>
            <h1 className="">
                OUR PORTFOLIO <br/>
                EXPERIENCE OUR WORK
            </h1>
        </div>
    )
}

export default Headerimag