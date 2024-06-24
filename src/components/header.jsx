import React, { useRef, useState, useEffect } from 'react';
import StyledHeader from './styles/styled_header';
import { Link } from 'react-router-dom';
import LG from "../assets/logo.png";
import Drawer from './drawer';
import Research_paper from "../assets/Research_paper.pdf";


const Header = () => {
  const headerRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");

  const toggle = () => {
    const header = headerRef.current;
    if (header) {
      header.classList.toggle('active');
    }
  };

  const openDrawer = (content) => {
    setDrawerContent(content);
    setIsDrawerOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        cv: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

  return (
    <>
      <StyledHeader ref={headerRef}>
        <Link to="/wm-portfolio">
          <img src={LG} alt="logo" />
        </Link>
        <ul>
          {/*<li><a onClick={() => openDrawer("Welcome to WHITE MATRIX Solutions, where innovation meets simplicity. Based in the vibrant tech hub of Kerala, India, we are a dynamic software development company dedicated to revolutionizing the way businesses interact with technology. Our ethos centres around making cutting-edge tech solutions both accessible and affordable, ensuring that businesses of all sizes can thrive in today's digital landscape. At the heart of our company is a passionate team of innovative and fresh minds. Each member brings a unique perspective and a commitment to excellence, driving us to push the boundaries of what's possible in software development. We believe in the power of collaboration and creativity, working tirelessly to turn complex challenges into straightforward, user-friendly solutions. Our tagline, 'Technology Simplified,' perfectly encapsulates our mission. We strive to demystify technology, making it as intuitive and accessible as a child's playbook. Join us on our journey to make technology work for you, not the other way around.")}>Who We Are</a></li>*/}
          <li>
            <a onClick={() => openDrawer(
              <div className="c-text-content">
                <h1 className="c-heading" >Who We Are</h1><br/>
                <p className="c-paragraph">Welcome to WHITE MATRIX Solutions, where innovation meets simplicity. Based in the vibrant tech hub of Kerala, India, we are a dynamic software development company dedicated to revolutionizing the way businesses interact with technology.<br/><br/> Our ethos centres around making cutting-edge tech solutions both accessible and affordable, ensuring that businesses of all sizes can thrive in today's digital landscape. At the heart of our company is a passionate team of innovative and fresh minds. Each member brings a unique perspective and a commitment to excellence, driving us to push the boundaries of what's possible in software development.<br/><br/> We believe in the power of collaboration and creativity, working tirelessly to turn complex challenges into straightforward, user-friendly solutions. Our tagline, 'Technology Simplified,' perfectly encapsulates our mission. We strive to demystify technology, making it as intuitive and accessible as a child's playbook. Join us on our journey to make technology work for you, not the other way around.</p>
              </div>)}>Who We Are
            </a>
          </li>


          <li>
            <a onClick={() => openDrawer(
              <div className="c-text-content">
            <h1 className="c-heading">What We Do</h1><br/>
                <p className="c-paragraph">At WHITE MATRIX, we specialize in offering a diverse range of products and services designed to meet the unique needs of businesses. We excel in creating innovative software solutions tailored to your specific requirements, leveraging our unique work breakdown structure to enhance productivity and significantly reduce development time.<br/><br/> Our advanced AI systems are at the forefront of technology, capable of generating exclusive content while respecting copyrights, providing a competitive edge in the digital landscape. Additionally, our talented team develops bespoke mobile applications that enhance customer engagement and streamline operations, delivering exceptional performance and user experience.<br/><br/> We also offer state-of-the-art offshore call center solutions, designed to accommodate businesses of any size, ensuring seamless communication and support. Committed to providing cost-effective technological solutions without compromising on quality, our aim is to empower businesses with the tools they need to succeed in an increasingly digital world. At WHITE MATRIX, we don’t just develop software; we create solutions that transform businesses and elevate user experiences.</p>
              </div>)}>What We Do
            </a>
          </li>

          
          <li><a onClick={() => openDrawer(
            <div className="c-text-content">
              <h1 className="c-heading">Insights</h1><br/>
              <p className="c-paragraph">
                <h2>Revolutionizing Software Development with Matrix-Driven Work Division</h2><br/>
                At White Matrix Software Solutions, we are constantly striving to push the boundaries of innovation in the software industry. Under the visionary leadership of our esteemed Director, Mr. Yadhukrishnan K A, we have pioneered a groundbreaking method that promises to transform the way software development is approached.
              </p><br/>
              <p className="c-paragraph">
                Introducing the "Matrix-Driven Work Division," a revolutionary system meticulously crafted to significantly reduce software development time without compromising on quality. This innovative approach restructures the traditional workflow, optimizing resource allocation, task management, and collaborative efficiency.
              </p><br/>
              <p className="c-paragraph">
                <h4>What is Matrix-Driven Work Division?</h4>
                Matrix-Driven Work Division is a unique framework that integrates advanced project management techniques with cutting-edge software development practices. By leveraging a matrix-based structure, this method ensures that every aspect of the development process is streamlined and executed with precision. Key benefits include:
              </p><br/>
              <p className="c-paragraph">
                <h4>Enhanced Efficiency, Improved Collaboration: Accelerated Development: Quality Assurance: The Visionary Behind the Innovation</h4>Mr. Yadhukrishnan K A, a seasoned expert in the software industry, has always been passionate about finding innovative solutions to common challenges. His extensive research and hands-on experience have culminated in the creation of the Matrix-Driven Work Division. This method is not only a testament to his expertise but also his commitment to driving progress in the field of software development.
              </p><br/>
              <p className="c-paragraph">
                <h4>Download Our Research Paper</h4>We are proud to share the detailed research paper on the Matrix-Driven Work Division, authored by Mr. Yadhukrishnan K A. This comprehensive document delves into the intricacies of the method, providing valuable insights and practical guidelines for implementation.
              </p><br/>
                <a  href={Research_paper} download='Research_paper'><button type="submit" className="c-submit-button">Download the Research Paper</button></a>
                <br/><br/>
              <p className="c-paragraph">
                Join us on this journey of innovation and discover how White Matrix Software Solutions is setting new benchmarks in the software industry with the Matrix-Driven Work Division. For more information, feel free to contact us or visit our website.
              </p>
            </div>
          )}>Insights</a></li>
          {/*<li><a onClick={() => openDrawer("Welcome to the WHITE MATRIX Insights section, your go-to resource for the latest trends, innovative practices, and thought leadership in technology and software development. We aim to empower our clients and the broader community with valuable knowledge and insights to stay ahead in the fast-evolving digital landscape. Industry Trends and Analysis Stay informed with our expert analysis of the latest trends in technology and software development. From AI advancements and machine learning to innovations in mobile app technology, we provide insights to help you leverage these trends, aligning with our 'Technology Simplified' philosophy. Case Studies Explore our case studies showcasing real-world challenges and solutions. See how our unique work breakdown structure enhances productivity and reduces development time, delivering tangible results for clients across various industries. Expert Opinions and Thought Leadership Gain perspectives from our industry experts and thought leaders. Our articles delve into critical issues, emerging technologies, and strategic approaches to business innovation, highlighting how user-friendly, people-oriented solutions can transform your business.")}>Insights</a></li>*/}
          {/*<li><Link to="/insight">Insights</Link></li>
          <li><Link to="/career">Careers</Link></li>*/}

          <li>
            <a onClick={() => openDrawer(
              <div>
                <div className="c-text-content">
                  <h1 className="c-heading">Career</h1><br/>
                  <p className="c-paragraph">
                    <h2>Welcome to Our Team!</h2><br/>
                    Welcome to WHITE MATRIX! Join us in simplifying technology and driving innovation. Enjoy the flexibility of working from home while contributing to cutting-edge projects. Grow your skills in a collaborative environment that celebrates creativity and supports career development. Explore opportunities to be part of our forward-thinking team. Join us and make an impact.
                  </p>
                </div>
                <form className="c-form" onSubmit={handleSubmit}>
                <div className="c-form-field-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="c-input-field"
                    value={formData.firstName}
                    onChange={handleChange}
                   />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="c-input-field"
                    value={formData.lastName}
                    onChange={handleChange}
                   />
                </div>
                <div className="c-form-field-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="c-input-field"
                    value={formData.email}
                    onChange={handleChange}
                   />
                </div>
                <div className="c-form-field-row">
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="c-input-field c-input-field-3-4"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  <label htmlFor="cv" className="c-file-label">Upload CV</label>
                  <input
                    type="file"
                    name="cv"
                    id="cv"
                    className="c-file-input"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="c-submit-button">Submit</button>
              </form>
            </div>
            )}>Careers
            </a>
          </li>
        </ul>
        <div className="toggle" onClick={toggle}></div>
      </StyledHeader>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} content={drawerContent} />
    </>
  );
};

export default Header;
