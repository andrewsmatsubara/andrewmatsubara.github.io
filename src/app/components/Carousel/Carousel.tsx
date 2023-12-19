import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.scss';
import Image from 'next/image';

export default function CarouselComponent() {
  const projectImageArray = ['1', '2', '3', '4', '5', '6'];

  return (
    <Carousel useKeyboardArrows autoPlay infiniteLoop emulateTouch transitionTime={1000} interval={4000} showStatus={false}  className={styles['carousel-container']}>
        {projectImageArray.map(projectImage => {
          return <div key={projectImage} className={styles['carousel-item']}>
                  <Image src="/next.svg" alt="image1" width={100} height={100} />
                </div>
        } )}
      </Carousel>
  );
}
