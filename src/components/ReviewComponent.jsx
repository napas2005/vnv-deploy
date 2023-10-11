import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Usericon } from "../assets";

const ReviewComponent = (props) => {
  return (
    <Card className="xs:w-[400px] xs:h-[220px] w-[220px] h-[340px] xs:flex-row rounded-2xl flex-col">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 xs:w-2/5 w-full h-[80px] xs:h-[220px] p-4 shrink-0 bg-slate-800 xs:rounded-none xs:rounded-l-lg rounded-t-xl rounded-b-none"
      >
        <img
          src={Usericon}
          alt="card-image"
          className="h-full w-full object-contain px-2"
        />
      </CardHeader>
      <CardBody className="bg-discount-gradient xs:rounded-none xs:rounded-r-lg rounded-b-lg text-white px-2 xs:h-[220px] h-[260px]">
        <Typography
          variant="h6"
          color="gray"
          className="mb-2 uppercase text-[18px]"
        >
          {props.name}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-[12px]">
          {props.text}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ReviewComponent;
