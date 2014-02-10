<?php
namespace Patlenain\VideotekBundle\Manager;


use Doctrine\ORM\EntityManager;
use Patlenain\VideotekBundle\Entity\Support;
use Patlenain\VideotekBundle\Entity\SupportRepository;

class SupportManager {

	/**
	 * @var EntityManager
	 */
	protected $em;

	/**
	 * @param EntityManager $em
	 */
	public function __construct($em)
	{
		$this->em = $em;
	}

	/**
	 * @return array
	 */
	public function listSupports()
	{
		return $this->getRepository()
			->listAll()
			->getQuery()
			->getResult();
	}

	/**
	 * @param long $id
	 * @return Support
	 */
	public function getSupport($id) {
		return $this->getRepository()->find($id);
	}

	/**
	 * @param Support $support
	 */
	public function saveSupport($support) {
		$this->em->persist($support);
		$this->em->flush();
	}

	/**
	 * @return SupportRepository
	 */
	public function getRepository()
	{
		return $this->em->getRepository('PatlenainVideotekBundle:Support');
	}
}