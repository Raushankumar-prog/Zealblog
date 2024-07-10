import Navigation from "../Ui/navigation@left/navigation1/navigation";

const Left = ({le,setle}) => {

    return (
  <div className={le ? "visiblefr" : "fr"}>
 <Navigation  le={le} setle={setle}/>
  </div> 
    );
}
 
export default Left;