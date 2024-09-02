import BoxSphereModel from "../components/BoxSphereModel";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectBoxSphere } from "../store";
import Page from "../components/Page";

export default function BoxSphere() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectBoxSphere());
  }, []);

  return (
    <Page>
      <BoxSphereModel/>
    </Page>
  );
}
