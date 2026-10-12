
const Card = (props) => {

    // console.log(props);
  return (
    <div className="card">
        <img src={props.img} alt="" />
      <h1>{props.username}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, beatae.</p>
      <button>Learn More</button>  
    </div>
  );
};

export default Card;