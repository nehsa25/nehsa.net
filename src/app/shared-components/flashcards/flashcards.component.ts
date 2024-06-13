import { Component } from '@angular/core';
import { FlashcardsService } from '../../services/flashcards.service';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { Question } from '../../types/question.type';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [MatButtonModule, NgIf],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss',
  providers: [FlashcardsService],
})
export class FlashcardsComponent {
  launchCardsBtn: boolean = false;
  ShowAnswer: boolean = false;
  constructor(public flashcardsService: FlashcardsService) {
  }
  ngOnInit() {
    let questions = [
      new Question("Which of the following is smallest?<ul><li>1 AU, 1 light-year, 1 parsec", "AU is the smallest, followed by light-year, then parsec</li></ul>"),
      new Question("What is the distance from the Earth to the Sun?", "1 AU"),
      new Question("What is the distance from the Earth to the Moon?", "1/4 AU"),
      new Question("What is the distance from the Earth to the nearest star?", "4 light-years"),
      new Question("What is the distance from the Earth to the center of the Milky Way?", "30,000 light-years"),
      new Question("What is the distance from the Earth to the nearest galaxy?", "2 million light-years"),
      new Question("What is the distance from the Earth to the edge of the observable universe?", "46 billion light-years"),
      new Question(
        "Which of the following statements are true, concerning Kepler's laws? <ul><li>Planets move in ellipses with the Sun at one focus</li><li>Planets move faster when closer to the Sun</li><li>Planets move slower when farther from the Sun</li></ul>",
        "All of the above are true"),
      new Question("Which of the following statements are true, concerning Newton's laws? <ul><li>An object in motion stays in motion</li><li>Force equals mass times acceleration</li><li>For every action, there is an equal and opposite reaction</li></ul>", "All of the above are true"),
      new Question("Which of the following statements are true, concerning the Big Bang? <ul><li>The universe is expanding</li><li>The universe was once much smaller</li><li>The universe was once much hotter</li></ul>", "All of the above are true"),
      new Question("Which of the following statements are true, concerning the fate of the universe? <ul><li>The universe will expand forever</li><li>The universe will contract back to a singularity</li><li>The universe will reach a maximum size and then contract</li></ul>", "The fate of the universe is unknown"),
      new Question("Which of the following statements are true, concerning the fate of the Earth? <ul><li>The Earth will be consumed by the Sun</li><li>The Earth will be ejected from the Solar System</li><li>The Earth will be consumed by a black hole</li></ul>", "The Earth will be consumed by the Sun"),
      new Question("Which of the following statements are true, regarding a parallax angle? <ul><li>It is the angle between two lines of sight</li><li>It is used to measure the distance to nearby stars</li><li>It is used to measure the distance to distant galaxies</li></ul>", "It is the angle between two lines of sight"),
      new Question("Which of the following forms of electromagnetic radiation has the shortest wavelength? <ul><li>green light</li><li>blue light</li><li>red light</li></ul>", "blue light"),
      new Question("Which of the following forms of electromagnetic radiation has the longest wavelength? <ul><li>green light</li><li>blue light</li><li>red light</li></ul>", "red light"),
      new Question("Which of the following forms of electromagnetic radiation has the highest frequency? <ul><li>green light</li><li>blue light</li><li>red light</li></ul>", "blue light"),
      new Question("Which of the following forms of electromagnetic radiation has the lowest frequency? <ul><li>green light</li><li>blue light</li><li>red light</li></ul>", "red light"),
      new Question("The following colors of light represent the peak wavelength of the blackbody spectrum for four stars. Which star has the hottest surface temperature? <ul><li>violet</li><li>blue</li><li>green</li><li>red</li></ul>", "violet"),
      new Question("How many different wavelengths of photons could be produced by electrons in the third excited state dropping to a lower state?", "3"),
      new Question("What kind of particles in an atom determine what element it is?", "protons"),
      new Question("If a star is moving closer to an observer, the light appears to be shifted to which end of the spectrum?", "blue"),
      new Question("What kind of galaxy is our galaxy?", "spiral"),
      new Question("What is the name of the galaxy nearest to our galaxy?", "Andromeda"),
      new Question("In what part(s) of our galaxy can old, red stars be found? <ul><li>disk</li><li>bulge</li><li>halo</li></ul>", "bulge, halo"),
      new Question("Spiral arms exist because of..", "density waves"),
      new Question("What is the name of the supermassive black hole at the center of our galaxy?", "Sagittarius A*"),
      new Question("We determine the distance of a Cepheid variable star by.. <ul><li>measuring its parallax angle</li><li>determining its luminosity from the period-luminosity relation and then applying the inverse square law for light.</li><li>knowing that all Cepheids have about the same luminosity and then applying the inverse square law for light.</li></ul>", "determining its luminosity from the period-luminosity relation and then applying the inverse square law for light."),
      new Question("Why do we think that the matter in our galaxy extends much further than the dust, gas and stars that we can see? " +
        "<ul><li>The stars form faster than they should at the outer edge. </li><li>The stars die faster than they should at the outer edge.</li><li>The stars orbit faster than they should at the outer edge.</li><li>The stars shine brighter than they should at the outer edge.</li></ul>", "The stars orbit faster than they should at the outer edge."),
      new Question("Which of the following statements are true regarding gravity lenses? <ul><li>Gravity lenses allow us to see galaxies that are farther awy than what we would normally be able to see.</li><li>Gravity lenses can be caused by galaxy clusters.</li><li>Gravity lensing can be caused by a brown dwarf passing between you and a distant star.</li></ul>", "All of the above are true"),
      new Question("Which of the following statements are true regarding the cosmic microwave background radiation? <ul><li>It is the remnant of the Big Bang.</li><li>It is the oldest light in the universe.</li><li>It is the most distant light in the universe.</li></ul>", "All of the above are true"),
      new Question("What evidence supports the theory that there is a black hole at the center of our galaxy? <ul><li>We observe a large, dark object that blocks all light at the galaxy center.</li><li>The number of stars in the center of our galaxy are disappearing at an alarming rate. </li><li>The motions of the stars at the center indicate that it contains a million solar masses within a region only about 1 parsec across.</li>", "The motions of the stars at the center indicate that it contains a million solar masses within a region only about 1 parsec across."),
      new Question("Which statement is true, regarding the look-back time of an object? The shorter the look-back time of an object, __________.<ul><li>the closer it is to us</li><li>the farther it is from us</li><li>the more distant it is from us</li></ul>", "the closer it is to us"),
      new Question("If we see the light from a galaxy as red-shifted, is it moving toward or away from us? <ul><li>toward us</li><li>away us</li></ul>", "away"),
      new Question("Which of the following statements are true, regarding the Tully-Fisher relation. <ul><li>The rotation rate of a spiral galaxy can be used to estimate its mass.</li><li>High-mass spiral galaxies tend to rotate more rapidly than low-mass spiral galaxies.</li><li>A high-mass spiral galaxy is typically more luminous than a low-mass spiral galaxy.</li><li>If we know the luminosity of a spiral galaxy, we can use the apparent brightness-luminosity relationship to calculate its distance away.</li></ul>", "All of the above are true"),
      new Question("What characteristics need to be present for an object to be useful as a standard candle? <ul><li>it must be very luminous</li><li>its luminosity must be known </li><li>its redshift must be known </li><li>its distance must be known</li></ul>", "its luminosity must be known and very luminous"),
      new Question("Which of the following statements is true, regarding Hubble's law? <ul><li>The bigger the cosmological redshift of a galaxy, the farther away it is.</li><li>The faster a distant galaxy appears to be moving, the farther away it is. </li><li>The faster a nearby star appears to be moving, the farther away it is. </li><li>The faster a nearby galaxy appears to be moving, the farther away it is.</li></ul>", "The bigger the cosmological redshift of a galaxy, the farther away it is."),
      new Question("Which of the following statements are true, regarding active galaxies? <ul><li>The central engine of an active galactic nucleus is powered by a supermassive black hole.</li><li>Active galactic nuclei do not emit light in a typical blackbody spectrum. </li><li>The nuclei of radio galaxies have very powerful jets emitted along their rotation axes.</li></ul>", "All of the above are true"),
      new Question("Which of the following statements are true, regarding the cosmological principle? <ul><li>The universe is homogeneous on the largest scales.</li><li>The universe is isotropic on the largest scales.</li><li>The universe is the same everywhere.</li></ul>", "All of the above are true"),
      new Question("How do we know that quasars are very luminous? <ul><li>Their spectral lines are very redshifted, and yet we are still able to see them.</li><li>Their lines are very blueshifted, and yet they are faint. </li><li>They rotate very fast, and yet they have large apparent brightness. </li><li>Their spectra show hydrogen lines, like stars undergoing fusion.</li></ul>", "Their spectral lines are very redshifted, and yet we are still able to see them."),
      new Question("Why are the luminosities of Type 1a supernovas are all about the same? <ul><li>They all have about the same brightness </li><li>The red giant stars have about the same temperature </li><li>The red giant stars have about the same mass </li><li>the white dwarf stars have about the same mass </li><li>They are all about the same distance away </li></ul>", "the white dwarf stars have about the same mass"),
      new Question("What can we infer from the orbital speeds of pairs of galaxies? <ul><li>the presence of dark matter</li><li>the presense of dark energy</li><li>the presence of normal matter</li></ul>", "the presence of dark matter"),
      new Question("Data from the Hubble Space Telescope indicates that very distant, early galaxies tend to be... <ul><li>small, blue irregular galaxies.</li><li>large, blue elliptical galaxies. </li><li>large red elliptical galaxies. </li><li>large spiral galaxies.</li></ul>", "small, blue irregular galaxies."),
      new Question("If we say that a galaxy has a lookback time of 1 billion years, we mean that... <ul><li>Its light traveled through space for 1 billion years to reach us. </li><li>The galaxy is now 1 billion years old. </li><li>It is now 1 billion light-years away. </li><li>The galaxy was 1 billion years old when the light that we are now seeing left it.</li></ul>", "The galaxy was 1 billion years old when the light that we are now seeing left it."),
      new Question("What is the correct interpretation for the redshift of distant galaxies? <ul><li>Light waves stretch out because the space they are traveling through is expanding.</li><li>Light spectrum is different for older galaxies because the laws of physics are different there. </li><li>They are Doppler shifted due to random motion. </li><li>The fact that gravity weakens with time causes their light waves to stretch.</li>", "Light waves stretch out because the space they are traveling through is expanding."),
      new Question("What gives evidence that the universe is expanding? <ul><li>The more distant the galaxy, the faster it is moving away from us.</li><li>All of the stars are moving away from us.</li><li>All of the galaxies are moving away from us.</li></ul>", "The more distant the galaxy, the faster it is moving away from us."),
      new Question("What kind of curvature could result in a triangle whose internal angles add up to 170 degrees? <ul><li>flat space with zero curvature </li><li>negative curvature </li><li>it is not possible, the internal angles of a triangle always equal 180 degrees </li><li>positive curvature</li></ul>", "positive curvature"),
      new Question("If the universe has critical density, two light beams that are emitted parallel to each other will... <ul><li>remain parallel</li><li>converge</li><li>diverge</li></ul>", "remain parallel"),
      new Question("Why did protons freeze out earlier than electrons? <ul><li>protons are more massive</li><li>protons have lower energy </li><li>electrons are redshifted </li><li>protons have more spin </li><li>protons are inherently colder </li><li>protons have shorter wavelength </li></ul>", "protons are more massive"),
      new Question("What happened to cause recombination (the decoupling of light)? <ul><li>The electroweak force froze out.</li><li>Electrons fell out of thermal equilibrium. </li><li>Atoms were formed.</li><li>Gravity split off from the superforce. </li><li>Fusion of atomic nuclei began. </li></ul>", "Atoms were formed."),
      new Question("What does the deuterium abundance in the present-day universe imply? <ul><li>The amount of dark matter present </li><li>The amount of dark energy present </li><li>The amount of fusion occurring in the cores of stars </li><li>The overall density of normal matter in the universe </li></ul>", "The overall density of normal matter in the universe"),
      new Question("What happened to the quarks that existed freely during the particle era? <ul><li>They evaporated.</li><li>They decoupled from normal matter. </li><li>They combined in groups to make electrons and neutrinos. </li><li>They combined in groups to make protons, neutrons, and their antiparticles. </li></ul>", "They combined in groups to make protons, neutrons, and their antiparticles."),
      new Question("Why does cold dark matter contribute to the large-scale structure of the universe? <ul><li>It interacts via gravity but not the electromagnetic force.</li><li>Cold dark matter causes the universe to expand.</li><li>Lightweight particles like neutrinos tend to clump together.</li></ul>", "It interacts via gravity but not the electromagnetic force."),
      new Question("Which sequence of epochs is correctly ordered in time? <ul><li>quark, nuclear, atomic, galactic </li><li>Planck, lepton, quark, matter </li><li>quark, dark energy, dark matter, galactic </li><li>quark, atomic, nuclear, stellar </li></ul>", "quark, nuclear, atomic, galactic"),
      new Question("Why did radiation density decrease faster than matter density, causing the matter-radiation crossover point? <ul><li>Photons created particle-antiparticle pairs.</li><li>Light was cosmologically redshifted. </li><li>Fusion began in stars, changing some matter into photons.</li></ul>", "Light was cosmologically redshifted."),
      new Question("What does it mean to say that particles are in thermal equilibrium? <ul><li>The universe is the same temperature everywhere.</li><li>The universe has reached critical density.</li><li>Particles are frozen out.</li><li>Particles undergo fusion.</li><li>Particles are created as fast as they are destroyed.</li></ul>", "Particles are created as fast as they are destroyed."),
      new Question("What happened during the nuclear epoch? <ul><li>deuterium was formed</li><li>helium was formed</li><li>electrons became bound to nuclei</li><li>nuclei formed in stellar fusion </li><li>protons and neutrons were created</li></ul>", "protons and neutrons were created"),
      new Question("What happened during the atomic epoch? <ul><li>electrons became bound to protons </li><li>fusion began in stars </li><li>protons and neutrons froze out </li><li>helium nuclei were formed </li><li>the universe became transparent to photons</li></ul>", "Electrons became bound to protons and the universe became transparent to photons"),
      new Question("An inflationary period is included in the theory of the early universe to address which of the following issues? <ul><li>the dominance of dark energy </li><li>the horizon problem</li><li>the freezing out of gravity </li><li>the flatness problem </li></ul>", "the horizon and the flatness problems"),
      new Question("Which of the following is evidence for supermassive black holes in active galaxies? <ul><li>very high speed orbital motions around galactic nuclei </li><li>powerful jets emanating from a compact core </li><li>rapid changes in the luminosity of the galaxy nucleus</li></ul>", "All of the above are evidence"),
      new Question("Which of the following is true of quasars? <ul><li>Quasars were more common in the past.</li><li>Some quasars are hundreds of times more luminous than the entire Milky Way. </li><li>Quasars are powered by the energy radiated by matter falling into a central black hole. </li><li>Some quasars can change their brightness every few hours.</li></ul>", "All of the above are true"),
      new Question("If the density of the universe is below critical density, which of the following statements are true? <ul><li>The universe is flat. </li><li>The universe has negative curvature. </li><li>The universe is open.</li><li>The universe is closed.</li><li>The universe has positive curvature.</li></ul>", "The universe is open and has negative curvature."),
      new Question("What needs to be included in the density of the universe to determine whether it is above or below critical density? <ul><li>dark matter </li><li>dark energy </li><li>ordinary matter</li><li>radiation</li></ul>", "All of the above"),
      new Question("What statements are true, regarding the cosmic microwave background radiation? <ul><li>Temperature fluctuations in the CMBR are only a few hundred microkelvins. </li><li>It was created when the universe became transparent.</li><li>It indicates that the universe is spatially flat. </li></ul>", "All of the above are true"),
      new Question("Suppose you are observing two stars, and they appear to be the same age. Which of the following statements could be true? <ul><li>The closer star is older.</li><li>They are the same age but different distances away. </li><li>The closer star is younger.</li><li>They are the same age and distance away.</li><li>They are different ages, but the same distance away. </li></ul>", "They are the same age but different distances away and the closer star could be younger."),
      new Question("Which of the following statements are true, regarding galaxy collisions? <ul><li>During galaxy collisions, collisions between individual stars are common. </li><li>Galaxy collisions can result in mergers of supermassive black holes</li><li>During galaxy collisions, collisions between dust and gas clouds can lead to star formation.</li></ul>", "During galaxy collisions, collisions between individual stars are common and During galaxy collisions, collisions between dust<br>and<br>gas clouds can lead to star formation."),
      new Question("How does evidence, using Hubble's law, indicates that the expansion rate of the universe is increasing? <ul><li>Faraway galaxies are moving faster than predicted by Hubble's law </li><li>Faraway galaxies appear to have stopped moving</li><li>Far away galaxies are moving slower than predicted by Hubble's law</li></ul>", "Faraway galaxies are moving faster than predicted by Hubble's law"),
      new Question("If a planet has a higher mass than Earth, but the same radius as Earth, the escape speed of the planet is __________ that of the Earth.  <ul><li>smaller than</li><li>larger than</li><li>the same as</li></ul>", "larger than"),
    ];
    this.setQuestions(questions);
  }

  setQuestions(questions: Question[]) {
    this.flashcardsService.setQuestions(questions);
  }

  launchCards() {
    this.launchCardsBtn = true;
  }

  showAnswer() {
    this.ShowAnswer = true;
  }

  showNext() {
    this.ShowAnswer = false;
    return this.flashcardsService.setQuestion();
  }
}
