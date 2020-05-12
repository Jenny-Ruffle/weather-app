import transformDay from "../transformDay";

const mockData = {
  Date: "2020-05-11T07:00:00+01:00",
  EpochDate: 1589176800,
  Temperature: {
    Minimum: {
      Value: 2.8,
      Unit: "C",
      UnitType: 17,
    },
    Maximum: {
      Value: 12.8,
      Unit: "C",
      UnitType: 17,
    },
  },
  Day: {
    Icon: 4,
    IconPhrase: "Intermittent clouds",
    HasPrecipitation: false,
  },
  Night: {
    Icon: 35,
    IconPhrase: "Partly cloudy",
    HasPrecipitation: false,
  },
  Sources: ["AccuWeather"],
  MobileLink:
    "http://m.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&unit=c&lang=en-us",
  Link:
    "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&unit=c&lang=en-us",
};

describe("transformDay", () => {
  it("tests that the function returns the correct date", () => {
    const result = transformDay(mockData);
    expect(result.day).toEqual("Monday");
    expect(result.date).toEqual("11 / 5");
  });

  it("tests that the function will use the correct icon", () => {
    const result = transformDay(mockData);
    expect(result.type).toEqual("sunnyCloudy");
  });

  it("tests that the function will return the correct temperatures", () => {
    const result = transformDay(mockData);
    expect(result.low).toEqual("3");
    expect(result.high).toEqual("13");
    expect(result.temp).toEqual("8");
  });
});
