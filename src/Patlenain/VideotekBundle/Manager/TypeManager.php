<?php
namespace Patlenain\VideotekBundle\Manager;


use Doctrine\ORM\EntityManager;
use Patlenain\VideotekBundle\Entity\Type;
use Patlenain\VideotekBundle\Entity\TypeRepository;

class TypeManager {

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
	public function listTypes()
	{
		return $this->getRepository()
			->listAll()
			->getQuery()
			->getResult();
	}

	/**
	 * @param long $id
	 * @return Type
	 */
	public function getType($id) {
		return $this->getRepository()->find($id);
	}

	/**
	 * @param Type $type
	 */
	public function saveType($type) {
		$this->em->persist($type);
		$this->em->flush();
	}

	/**
	 * @param Type $type
	 */
	public function deleteType($type) {
		$this->em->remove($type);
		$this->em->flush();
	}

	/**
	 * @return TypeRepository
	 */
	public function getRepository()
	{
		return $this->em->getRepository('PatlenainVideotekBundle:Type');
	}
}