import FlaskBottleModel from "../components/FlaskBottleModel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectFlaskBottle, updateFlaskBottle } from "../store";
import Page from "../components/Page";
import RangeInput from "../components/RangeInput";

export default function FlaskBottle() {
  const dispatch = useDispatch();
  const flaskBottle = useSelector((state) => state.models.flaskBottle);

  const [width, setWidth] = useState(flaskBottle.width);
  const [height, setHeight] = useState(flaskBottle.height);
  const [thickness, setThickness] = useState(flaskBottle.thickness);

  useEffect(() => {
    dispatch(selectFlaskBottle());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(updateFlaskBottle({
      ...flaskBottle,
      width,
      height,
      thickness
    }));
  }

  const controls = (
    <form onSubmit={handleSubmit}>
      <RangeInput
        label="width"
        id="width"
        name="width"
        max="100"
        value={width}
        onChange={(e) => setWidth(parseInt(e.target.value))}
      />
      <RangeInput
        label="height"
        id="height"
        name="height"
        max="100"
        value={height}
        onChange={(e) => setHeight(parseInt(e.target.value))}
      />
      <RangeInput
        label="thickness"
        id="thickness"
        name="thickness"
        max="100"
        value={thickness}
        onChange={(e) => setThickness(parseInt(e.target.value))}
      />

      <button className="model-update-button">Update</button>
    </form>
  );

  return (
    <Page controls={controls}>
      <FlaskBottleModel
        width={flaskBottle.width}
        height={flaskBottle.height}
        thickness={flaskBottle.thickness}
      />
    </Page>
  );
}
