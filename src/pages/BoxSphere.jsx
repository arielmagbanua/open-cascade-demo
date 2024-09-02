import BoxSphereModel from "../components/BoxSphereModel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectBoxSphere, updateBoxSphere } from "../store";
import Page from "../components/Page";
import RangeInput from "../components/RangeInput";

export default function BoxSphere() {
  const dispatch = useDispatch();

  const boxSphere = useSelector((state) => state.models.boxSphere);
  const [sphereSize, setSphereSize] = useState(boxSphere.size);

  useEffect(() => {
    dispatch(selectBoxSphere());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateBoxSphere({
      ...boxSphere,
      size: sphereSize
    }));
  }

  const handleSizeChange = (event) => {
    const value = parseFloat(event.target.value);
    setSphereSize(value);
  }

  const controls = (
    <form onSubmit={handleSubmit}>
      <RangeInput value={sphereSize} onChange={handleSizeChange} />
      <button className="model-update-button">Update</button>
    </form>
  );

  return (
    <Page controls={controls}>
      <BoxSphereModel sphereSize={boxSphere.size}/>
    </Page>
  );
}
