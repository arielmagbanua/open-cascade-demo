import "@google/model-viewer";
import initOpenCascade from "opencascade.js";
import { useEffect, useState } from "react";
import shapeToUrl from "../shapeToUrl";
import ModelViewer from "./ModelViewer";

export default function BoxSphereModel() {
  const [modelUrl, setModelUrl] = useState();

  useEffect(() => {
    initOpenCascade().then(oc => {
      // TODO: this sphere size parameter
      const SPHERE_SIZE = 0.68;

      const box = new oc.BRepPrimAPI_MakeBox_2(1, 1, 1);
      const sphere = new oc.BRepPrimAPI_MakeSphere_5(new oc.gp_Pnt_3(0.5, 0.5, 0.5), SPHERE_SIZE);
      const cut = new oc.BRepAlgoAPI_Cut_3(box.Shape(), sphere.Shape(), new oc.Message_ProgressRange_1());
      cut.Build(new oc.Message_ProgressRange_1());
      const shape = cut.Shape();
      const url = shapeToUrl(oc, shape);
      setModelUrl(url);
    });
  }, []);

  return <ModelViewer modelUrl={modelUrl}/>
}
