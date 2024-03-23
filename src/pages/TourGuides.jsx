import tourGuides from "../assets/images/tour_guides.png"

function TourGuides() {
  return (
    <>
        <section className="start">
            <img src={tourGuides} alt="tour guides" />
            <h1>Tour Guides</h1>
        </section>
        <main>
            <p>Embark on a journey of discovery with our team of dedicated tour guides, ready to unveil the secrets and wonders of our captivating region. Whether you're want a city guide or museum guide or want to learn more about the culture, our guides are here to ensure an unforgettable experience tailored to your interests.</p>
            <div className="guides">
                
            </div>
        </main>
    </>
  )
}

export default TourGuides