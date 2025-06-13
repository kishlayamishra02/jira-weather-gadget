import React, { useState, useEffect } from "react";
import ForgeReconciler, {
  Text, Textfield, Form, Button,
  FormSection, FormFooter, Label,
  RequiredAsterisk, useProductContext, useForm
} from "@forge/react";
import { invoke, view } from "@forge/bridge";

const View = () => {
  const [result, setResult] = useState("Loading…");
  const ctx = useProductContext();

  useEffect(() => {
    if (!ctx) return;

    const { gadgetConfiguration } = ctx.extension;
    const city    = gadgetConfiguration.city    || "";
    const country = gadgetConfiguration.country || "";

    if (!city || !country) {
      setResult("⚠️ Configure city & country first");
      return;
    }


    invoke("getWeather", { city, country }).then(setResult);
  }, [ctx]);

  if (!ctx) return "Loading…";
  const { gadgetConfiguration } = ctx.extension;

  return (
    <>
      <Text>🌍 {gadgetConfiguration.city}, {gadgetConfiguration.country}</Text>
      <Text>{result}</Text>
    </>
  );
};

export const Edit = () => {
  const { handleSubmit, register } = useForm();
  const configure = (data) => view.submit(data);

  return (
    <Form onSubmit={handleSubmit(configure)}>
      <FormSection>
        <Label>City<RequiredAsterisk/></Label>
        <Textfield {...register("city", { required: true })}/>
        <Label>Country code (e.g. IN, US)<RequiredAsterisk/></Label>
        <Textfield {...register("country", { required: true })}/>
      </FormSection>
      <FormFooter>
        <Button appearance="primary" type="submit">Save</Button>
      </FormFooter>
    </Form>
  );
};

const App = () => {
  const ctx = useProductContext();
  if (!ctx) return "Loading…";
  return ctx.extension.entryPoint === "edit" ? <Edit/> : <View/>;
};

ForgeReconciler.render(<React.StrictMode><App/></React.StrictMode>);
