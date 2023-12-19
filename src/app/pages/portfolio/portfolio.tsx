import CarouselComponent from '@/app/components/Carousel/Carousel';
import styles from './portfolio.module.scss';

export default function Portfolio() {
  return (
    <section className={styles['portfolio']} id='portfolio'>
      <CarouselComponent />
    </section>
  ); 
}
