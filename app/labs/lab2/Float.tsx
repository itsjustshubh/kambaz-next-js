const starshipImg =
  "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img
          className="wd-float-right"
          src={starshipImg}
          alt="Starship"
          width={150}
          height={100}
        />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic
        laudantium repellat. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Eius hic laudantium repellat. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Eius hic laudantium repellat.
        <img
          className="wd-float-left"
          src={starshipImg}
          alt="Starship"
          width={150}
          height={100}
        />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic
        laudantium repellat. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Eius hic laudantium repellat. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Eius hic laudantium repellat.
        <img
          className="wd-float-right"
          src={starshipImg}
          alt="Starship"
          width={150}
          height={100}
        />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic
        laudantium repellat. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Eius hic laudantium repellat.
        <img
          className="wd-float-left"
          src={starshipImg}
          alt="Starship"
          width={150}
          height={100}
        />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic
        laudantium repellat. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Eius hic laudantium repellat.
        <div className="wd-float-done" />
      </div>
      <h3 style={{ marginTop: "1rem" }}>Horizontal layout with float</h3>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img
          className="wd-float-right"
          src={starshipImg}
          alt="Starship"
          width={150}
          height={100}
        />
        <div className="wd-float-done" />
      </div>
    </div>
  );
}
