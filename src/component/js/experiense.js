import Item_exp from "./items_exper";
import "../css/experiense.css"
const Experience=(props)=>{
    const {itemExper} = props
    return(
        <div id="Experience" >
            <div className="title-head" >
                <div className="box-cover">
                    <p className="text-exp">Experience...</p>
                </div>
            </div>
            <div className="items_exper">
                {itemExper.map((element)=>{
                    return <Item_exp {...element} key={element.id}/>
                })}
            </div>
        </div>
        
    );
}
export default Experience;
