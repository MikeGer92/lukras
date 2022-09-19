import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({app}, inject) => {
  app.AOS = new AOS.init({
    // delay: 3000, // values from 0 to 3000, with step 50ms
    duration: 3000, // values from 0 to 3000, with step 50ms
  });
};
