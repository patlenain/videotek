<?php
namespace Patlenain\VideotekBundle\DataFixtures\ORM;


use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Patlenain\VideotekBundle\Entity\Support;

class LoadSupports extends AbstractFixture implements OrderedFixtureInterface {
	/**
	 * @{inheritDoc}
	 */
	public function load(ObjectManager $manager) {
		// DVD
		$support = new Support();
		$support->setCode("DVD");
		$support->setLibelle("DVD");
		$manager->persist($support);
		$this->addReference("support-dvd", $support);
		// Blu-ray
		$support = new Support();
		$support->setCode("BD");
		$support->setLibelle("Blu-ray");
		$manager->persist($support);
		$this->addReference("support-bd", $support);
		// VHS
		$support = new Support();
		$support->setCode("VHS");
		$support->setLibelle("VHS");
		$manager->persist($support);
		$this->addReference("support-vhs", $support);
		// Flush
		$manager->flush();
	}

	/**
	 * ${inheritDoc}
	 */
	public function getOrder() {
		return 1;
	}
}