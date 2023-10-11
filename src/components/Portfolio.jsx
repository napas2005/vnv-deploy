import React from "react";
import { Example } from "../assets";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Portfolio = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex md:flex-row flex-col justify-center items-center gap-x-6">
        <Card className="mt-6 max-w-96 bg-discount-gradient">
          <CardHeader color="blue-gray" className="relative h-56 mt-6">
            <img src={Example} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" className="text-white">
              Віртуальний музей мистецтва
            </Typography>
            <Typography className="text-white mt-4">
              Цей проект - це віртуальний музей, який дозволяє користувачам
              дізнатися більше про великих митців та їхні твори мистецтва.
              Відвідувачі можуть переглядати колекції картин, скульптур та інших
              видів мистецтва.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[40px]">
              Детальніше
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 max-w-96 bg-discount-gradient">
          <CardHeader color="blue-gray" className="relative h-56 mt-6">
            <img src={Example} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" className="text-white">
              Туристичний гід для подорожей
            </Typography>
            <Typography className="text-white mt-4">
              Веб-сайт, де користувачі можуть знайти інформацію про різні
              туристичні напрямки, визначити маршрути, замовити тури, а також
              дізнатися про цікаві місця для відвідування та ресторани.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[40px]">
              Детальніше
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 max-w-96 bg-discount-gradient">
          <CardHeader color="blue-gray" className="relative h-56 mt-6">
            <img src={Example} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" className="text-white">
              Блог зі здоровим способом життя
            </Typography>
            <Typography className="text-white mt-4">
              Блог, присвячений здоровому способу життя, де ви можете
              публікувати рецепти, поради щодо здорового харчування, фізичної
              активності та загального самопокращення.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 h-[40px]">
              Детальніше
            </Button>
          </CardFooter>
        </Card>
      </div>
      <button
        class="cursor-pointer mt-6  duration-300 bg-gradient-to-l from-cyan-500 to-blue-500 rounded-lg w-[180px] h-[42px] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Хочу також
      </button>
      ;
    </div>
  );
};

export default Portfolio;
