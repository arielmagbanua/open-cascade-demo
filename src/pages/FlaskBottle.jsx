import FlaskBottleModel from "../components/FlaskBottleModel";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectFlaskBottle } from "../store";
import Page from "../components/Page";

export default function FlaskBottle() {
  const dispatch = useDispatch();

  const [width, setWidth] = useState(40);
  const [height, setHeight] = useState(60);
  const [thickness, setThickness] = useState(20);

  useEffect(() => {
    dispatch(selectFlaskBottle());
  }, []);

  const controls = (
    <>
      <div className="range-input-controls">
        <label htmlFor="width">Width: </label>
        <input
          className="horizontal"
          value={width}
          type="range"
          id="width"
          name="width"
          max="100"
          onChange={(e) => setWidth(parseInt(e.target.value))}
        />
      </div>
      <div className="range-input-controls">
        <label htmlFor="height">Height: </label>
        <input
          className="horizontal"
          value={height}
          type="range"
          id="height"
          name="height"
          max="100"
          onChange={(e) => setHeight(parseInt(e.target.value))}
        />
      </div>
      <div className="range-input-controls">
        <label htmlFor="thickness">Thickness: </label>
        <input
          className="horizontal"
          value={thickness}
          type="range"
          id="thickness"
          name="thickness"
          max="100"
          onChange={(e) => setThickness(parseInt(e.target.value))}
        />
      </div>
    </>
  );

  return (
    <Page controls={controls}>
      <FlaskBottleModel width={width} height={height} thickness={thickness}/>
    </Page>
  );
}
