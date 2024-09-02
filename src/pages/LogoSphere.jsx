import { LogoSphereModel } from "../components/LogoSphereModel";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectLogoSphere } from "../store";
import Page from "../components/Page";

export default function LogoSphere() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectLogoSphere());
  }, []);

  return (
    <Page>
      <LogoSphereModel/>
    </Page>
  );
}
