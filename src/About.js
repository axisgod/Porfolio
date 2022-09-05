import './About.css'
function About(){
    return <>
        <section id='profile'>
            <picture id='profile-img'>
                <img  src='https://miro.medium.com/max/2400/1*SQZYTn6607Tu9Xrjt0xS8g.jpeg' />
            </picture>
            
            <h2>Armando Madrigal Lucatero</h2>
            <h4>Data Scientist || Machine Learning Engineer</h4>
            <section id='contact-me'> 
                <div className='contact-icon'><img src='icons/github.png' /></div>
                <div className='contact-icon'><img src='icons/linkedin.png' /></div>
                <div className='contact-icon'><img src='icons/kaggle.png' /></div>
            </section>

        </section>
        <section>

        </section>
    </>
}
export default About;