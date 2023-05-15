export default function TouristInfoCards() {
  //Array with info of my cards
  const cities = [
    {
      image: "https://media.timeout.com/images/105400989/750/422/image.jpg",
      website: "https://peoplemakeglasgow.com",
      title: "Glasgow",
      text:
        "Glasgow is famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuildin"
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/manchester-canal-uk-england-skyline-shot-deansgate-108118828.jpg",
      website: "https://visitmanchester.com",
      title: "Manchester",
      text:
        "Manchester is a major city in the northwest of England with a rich industrial heritage."
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
      website: "https://visitlondon.com",
      title: "London",
      text:
        "At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations."
    }
  ];

  return (
    <div className="cont-cards">
      {cities.map(city => (
        <div className="card">
          <img src={city.image} className="card-img" />
          <div className="card-body">
            <p>{city.text}</p>
            <div className="btn-card">
              <a href={city.website} className="btn btn-primary">
                {city.title}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
