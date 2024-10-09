import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { NextButton, PrevButton, usePrevNextButtons } from '../components/CarrouselArrowButtons';

// Tipo para los slides
type Slide = {
    id: number;
    url: string;
};

type PropType = {
    slides: Slide;
    options?: EmblaOptionsType;
};

const Carrousel: React.FC<PropType> = ({ options }) => {
    const [slides, setSlides] = useState<Slide[]>([]); // Estado para guardar los slides
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

    // Fetch de los datos desde la API
    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await axios.get<Slide[]>('http://localhost:3000/season-pictures');
                setSlides(response.data); // Guarda los datos del estado
            } catch (error) {
                console.error('Error fetching season pictures:', error);
            }
        };

        fetchSlides();
    }, []);

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;
        resetOrStop();
    }, []);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide) => (
                        <div className="embla__slide embla__class-names" key={slide.id}>
                            <img
                                className="embla__slide__img"
                                src={slide.url} // Muestra la imagen obtenida del JSON
                                alt={"Slide ${slide.id}"} // Uso el id como parte del alt
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </div>
    );
};

export default Carrousel;