<?php
namespace Patlenain\VideotekBundle\DataFixtures\ORM;


use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Patlenain\VideotekBundle\Entity\Genre;

class LoadGenres extends AbstractFixture implements OrderedFixtureInterface {
	/**
	 * @{inheritDoc}
	 */
	public function load(ObjectManager $manager) {
		// Thriller
		$genre = new Genre();
		$genre->setCode("THRIL");
		$genre->setLibelle("Thriller");
		$manager->persist($genre);
		$this->addReference("genre-thril", $genre);
		// Catastrophe
		$genre = new Genre();
		$genre->setCode("CATA");
		$genre->setLibelle("Catastrophe");
		$manager->persist($genre);
		$this->addReference("genre-cata", $genre);
		// Science-fiction
		$genre = new Genre();
		$genre->setCode("SCIFI");
		$genre->setLibelle("Science-fiction");
		$manager->persist($genre);
		$this->addReference("genre-scifi", $genre);
		// Fantastique
		$genre = new Genre();
		$genre->setCode("FANTA");
		$genre->setLibelle("Fantastique");
		$manager->persist($genre);
		$this->addReference("genre-fanta", $genre);
		// Action
		$genre = new Genre();
		$genre->setCode("ACTION");
		$genre->setLibelle("Action");
		$manager->persist($genre);
		$this->addReference("genre-action", $genre);
		// Humour
		$genre = new Genre();
		$genre->setCode("HUMOUR");
		$genre->setLibelle("Humour");
		$manager->persist($genre);
		$this->addReference("genre-humour", $genre);
		// Flush
		$manager->flush();
	}

	/**
	 * ${inheritDoc}
	 */
	public function getOrder() {
		return 3;
	}
}