/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import NotifyMeForm from '@/components/NotifyMeForm';
import ContactUs from '@/components/ContactUs';
import { useInView } from 'react-intersection-observer';
import { ClipLoader } from 'react-spinners';

export default function Home() {
  const [isPhone1Replaced, setIsPhone1Replaced] = useState(false);
  const [isPhone3Replaced, setIsPhone3Replaced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loadingPhone1, setLoadingPhone1] = useState(false);
  const [loadingPhone3, setLoadingPhone3] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaChange = (e: { matches: boolean | ((prevState: boolean) => boolean) }) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const { ref: homeRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection('home');
    },
  });

  const { ref: howItWorksRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection('how-it-works');
    },
  });

  const { ref: missionRef } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection('our-mission');
    },
  });

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handlePhone1Click = () => {
    setLoadingPhone1(true);
    setIsPhone1Replaced(!isPhone1Replaced);
  };

  const handlePhone3Click = () => {
    setLoadingPhone3(true);
    setIsPhone3Replaced(!isPhone3Replaced);
  };

  const phone1 = { src: '/Phone1.svg', alt: 'Phone 1' };
  const phone2 = { src: '/Phone2.svg', alt: 'Phone 2' };
  const phone3 = { src: '/Phone3.svg', alt: 'Phone 3' };
  const phone4 = { src: '/Phone4.svg', alt: 'Phone 4' };

  return (
    <div>
      <div className="nav">
        <Link
          className={activeSection === 'home' ? 'highlighted-link' : ''}
          href="#home"
          onClick={(e) => handleScroll(e, 'home')}
        >
          Home
        </Link>
        <Link
          className={activeSection === 'how-it-works' ? 'highlighted-link' : ''}
          href="#how-it-works"
          onClick={(e) => handleScroll(e, 'how-it-works')}
        >
          How it works
        </Link>
        <Link
          className={activeSection === 'our-mission' ? 'highlighted-link' : ''}
          href="#our-mission"
          onClick={(e) => handleScroll(e, 'our-mission')}
        >
          Our Mission
        </Link>
      </div>
      <div id="home" className="section hero" ref={homeRef}>
        <h1>
          Cut through the clutter with <span className="clarify">Clarify</span>
        </h1>
        <h2>
          When every inch of the internet is fighting for your attention, Clarify helps you quickly see through the misleading headlines and thumbnails by providing instant insights directly in a pop-up modal, so you can stay focused without the disruption of opening another app.
          <NotifyMeForm />
        </h2>
      </div>

      <div id="how-it-works" className="section how-it-works" ref={howItWorksRef}>
        <div id="carousel-wrapper-1" className="carousel-wrapper">
          <div className={`image-container ${isPhone1Replaced ? 'show' : ''}`}>
            {loadingPhone1}
            <Image
              src={isPhone1Replaced ? phone2.src : phone1.src}
              alt={phone1.alt}
              width={400}
              height={800}
              layout="responsive"
              onLoadingComplete={() => setLoadingPhone1(false)}
            />
          </div>
          {isMobile ? (
            <button className="clarify-button" onClick={handlePhone1Click}>
              {loadingPhone1 ? <ClipLoader size={15} color="#ffffff" /> : isPhone1Replaced ? 'Go back' : 'See Clarified Result'}
            </button>
          ) : null}
        </div>
        <div id="carousel-text-1" className="carousel-text">
          <h2>Come across an interesting headline?</h2>
          <br />
          <p>Simply Share to Clarify and get instant insights, right there, without disrupting your current flow</p>
          <br />
          <p>
            Why waste time, shifting through ads and pesky cookie pop ups and not to mention misleading headlines like the one shown here. Know what you're getting yourself into.
          </p>
          {!isMobile ? (
            <button className="clarify-button" onClick={handlePhone1Click}>
              {loadingPhone1 ? <ClipLoader size={15} color="#ffffff" /> : isPhone1Replaced ? 'Go back' : 'See Clarified Result'}
            </button>
          ) : null}
          <br />
        </div>
      </div>

      <div id="how-it-works-2" className="section how-it-works">
        <div id="carousel-text-2" className="carousel-text">
          <h2>A YouTube thumbnail catches your eye?</h2>
          <br />
          <p>We all know how crazy YouTube titles and thumbnails can get, so share the link with Clarify!</p>
          <br />
          <p>Within seconds, Clarify analyzes the YouTube thumbnail and compares it with the YouTube content to bring you clarity on the video!</p>
          {!isMobile ? (
            <button className="clarify-button" onClick={handlePhone3Click}>
              {loadingPhone3 ? <ClipLoader size={15} color="#ffffff" /> : isPhone3Replaced ? 'Go back' : 'See Clarified Result'}
            </button>
          ) : null}
        </div>
        <div id="carousel-wrapper-2" className="carousel-wrapper">
          <div className={`image-container ${isPhone3Replaced ? 'show' : ''}`}>
            {loadingPhone3}
            <Image
              src={isPhone3Replaced ? phone4.src : phone3.src}
              alt={phone3.alt}
              width={400}
              height={800}
              layout="responsive"
              onLoadingComplete={() => setLoadingPhone3(false)}
            />
          </div>
          {isMobile ? (
            <button className="clarify-button" onClick={handlePhone3Click}>
              {loadingPhone3 ? <ClipLoader size={15} color="#ffffff" /> : isPhone3Replaced ? 'Go back' : 'See Clarified Result'}
            </button>
          ) : null}
        </div>
      </div>
      <div id="our-mission" className="section mission" ref={missionRef}>
        <h1>
          <span className="clarify-mission">Clarify</span> aims to save you time by filtering out the crap on the internet
        </h1>
        <h2>
          The quality of the content on the internet is dwindling. At clarify we want to make it easier for you to filter out the crap on the internet so you only spend time consuming what you want.
          <br />
          <br />
          If you want to help us with our mission or want to know more, contact us with the form below
        </h2>
        <div className="contact">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
