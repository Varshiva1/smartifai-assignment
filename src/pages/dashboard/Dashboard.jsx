import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { Carousel, DatePicker } from "antd";

const { RangePicker } = DatePicker;

export default function Dashboard() {
  const [activeCountry, setActiveCountry] = useState("India");
  const [currentWeather, setCurrentWeather] = useState({});

  const fetchData = async () => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=dd744413e3d6405a852123256221701&q=${activeCountry}`
    );
    const data = await res.json();
    setCurrentWeather(data.current);
  };

  useEffect(() => {
    fetchData();
  }, [activeCountry]);

  return (
    <div>
      <br />
      <div className="max-[800px]:flex-col max-[800px]:gap-2  bg-primaryColor rounded-lg text-white p-1 flex gap-8 align-middle">
        <select className="bg-transparent w-[150px] max-[800px]:w-full">
          {["Daily", "Weekly", "Monthly"].map((ele) => (
            <option className='text-black'value={ele}>{ele}</option>
          ))}
        </select>
        <p className="max-[800px]:flex max-[800px]:justify-between">
          Total Earnings <span className="text-xl"> $54.36</span>
        </p>
        <p className="max-[800px]:flex max-[800px]:justify-between">
          Total Spent{" "}
          <span className="text-secondaryColor text-xl"> $21.63</span>
        </p>
        <p className="max-[800px]:flex max-[800px]:justify-between">
          Total Posts <span className="text-xl"> 72</span>
        </p>
      </div>
      <br />
      <div className="flex justify-between max-[800px]:flex-col gap-3">
        <div className="flex gap-8 ">
          {["India", "Canada", "Australia"].map((ele, index) => (
            <p
              key={index}
              className={`${
                activeCountry === ele && "border-b-2 border-secondaryColor"
              } cursor-pointer self-start`}
              onClick={() => setActiveCountry(ele)}
            >
              {ele}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <RangePicker format={"DD-MMM-YY"} style={{ width: "200px" }} />
          <select className="p-1 rounded-md max-[800px]:w-[200px]">
            {["Select Account", "Account 1", "Account 2"].map((ele) => (
              <option value={ele}>{ele}</option>
            ))}
          </select>
        </div>
      </div>

      <br />
      <div className="flex w-[100%] max-[1280px]:flex-col max-[1280px]:gap-4 gap-4">
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 max-[450px]:grid-cols-2">
          <Cards title="Weather" icon={currentWeather?.condition?.icon}>
            {currentWeather?.condition?.text}
          </Cards>
          <Cards title="Temperature (C)">
            {currentWeather?.temp_c} &deg; C
          </Cards>
          <Cards title="Temperature (F)">{currentWeather?.temp_f} F</Cards>
          <Cards title="Wind Speed">{currentWeather?.wind_kph}/kph</Cards>
          <Cards title="Humidity">{currentWeather?.humidity}</Cards>
          <Cards title="Heat Index (C)">{currentWeather?.heatindex_c}</Cards>
        </div>
        <div className="bg-white w-[430px] h-[320px] rounded-md max-[800px]:w-full max-[800px]:h-[200px]">
          <Carousel autoplay>
            {Array(3)
              .fill()
              .map((_, index) => (
                <p className="text-center py-28 text-2xl">
                  Container {index + 1}
                </p>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}