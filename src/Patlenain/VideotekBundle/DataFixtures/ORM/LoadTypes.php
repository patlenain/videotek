<?php
namespace Patlenain\VideotekBundle\DataFixtures\ORM;


use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Patlenain\VideotekBundle\Entity\Type;

class LoadTypes extends AbstractFixture implements OrderedFixtureInterface {
	/**
	 * @{inheritDoc}
	 */
	public function load(ObjectManager $manager) {
		// Dessin animé
		$type = new Type();
		$type->setCode("DESSIN");
		$type->setLibelle("Dessin animé");
		$manager->persist($type);
		$this->addReference("type-dessin", $type);
		// Téléfilm
		$type = new Type();
		$type->setCode("TELE");
		$type->setLibelle("Téléfilm");
		$manager->persist($type);
		$this->addReference("type-tele", $type);
		// Film
		$type = new Type();
		$type->setCode("FILM");
		$type->setLibelle("Film");
		$manager->persist($type);
		$this->addReference("type-film", $type);
		// Documentaire
		$type = new Type();
		$type->setCode("DOC");
		$type->setLibelle("Documentaire");
		$manager->persist($type);
		$this->addReference("type-doc", $type);
		// Flush
		$manager->flush();
	}

	/**
	 * ${inheritDoc}
	 */
	public function getOrder() {
		return 2;
	}
}