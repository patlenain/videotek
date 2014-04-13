<?php
namespace Patlenain\VideotekBundle\Manager;


use Doctrine\ORM\EntityManager;
use Patlenain\VideotekBundle\Entity\Genre;
use Patlenain\VideotekBundle\Entity\GenreRepository;

class GenreManager {

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
	public function listGenres()
	{
		return $this->getRepository()
			->listAll()
			->getQuery()
			->getResult();
	}

	/**
	 * @param long $id
	 * @return Genre
	 */
	public function getGenre($id) {
		return $this->getRepository()->find($id);
	}

	/**
	 * @param Genre $genre
	 */
	public function saveGenre($genre) {
		$this->em->persist($genre);
		$this->em->flush();
	}

	/**
	 * @param Genre $genre
	 */
	public function deleteGenre($genre) {
		$this->em->remove($genre);
		$this->em->flush();
	}

	/**
	 * @return GenreRepository
	 */
	public function getRepository()
	{
		return $this->em->getRepository('PatlenainVideotekBundle:Genre');
	}
}