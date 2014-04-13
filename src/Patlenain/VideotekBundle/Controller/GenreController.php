<?php
namespace Patlenain\VideotekBundle\Controller;

use Patlenain\VideotekBundle\Form\GenreType;
use Patlenain\VideotekBundle\Entity\Genre;
use Symfony\Component\Routing\Annotation\Route;
use JMS\Serializer\Serializer;

/**
 * @Route("/api/genre")
 */
class GenreController extends JsonController {


    /**
     * @Route("/list", name="api_patlenain_videotek_genre_list")
     */
    public function listAction() {
		$genres = $this->get('patlenain_videotek.genre_manager')->listGenres();
		return $this->createJsonResponse(
				array('success' => true, 'data' => $genres));
    }

    /**
     * @Route("/create", name="api_patlenain_videotek_genre_create")
     */
    public function createAction() {
    	$genre = new Genre();
    	$form = $this->createForm(new GenreType(), $genre);
    	$form->submit($this->getRequest()->request->all());
    	if ($form->isValid()) {
    		$this->get('patlenain_videotek.genre_manager')->saveGenre($genre);
    		return $this->createJsonResponse(array('success' => true, 'genre' => $genre));
    	}
    	return $this->createJsonResponse(array('success' => false, 'form' => $form));
    }

    /**
     */
    public function getAction($id) {
		$genre = $this->get('patlenain_videotek.genre_manager')->getGenre($id);
		if (!$genre) {
			throw $this->createNotFoundException('Genre inexistant');
		}
		return $genre;
    }

    /**
     * @Route("/update/{id}", name="api_patlenain_videotek_genre_update")
     */
    public function updateAction($id) {
    	$genre = $this->get('patlenain_videotek.genre_manager')->getGenre($id);
    	if (!$genre) {
    		throw $this->createNotFoundException('Genre inexistant');
    	}
    	$form = $this->createForm(new GenreType(), $genre);
    	$form->submit($this->getRequest()->request->all());
    	if ($form->isValid()) {
    		$this->get('patlenain_videotek.genre_manager')->saveGenre($genre);
    		return $this->createJsonResponse(array('success' => true, 'genre' => $genre));
    	}
    	return $this->createJsonResponse(array('success' => false, 'form' => $form));
    }

    /**
     */
    public function deleteAction($id) {
    	$genre = $this->get('patlenain_videotek.genre_manager')->getGenre($id);
    	if (!$genre) {
    		throw $this->createNotFoundException('Genre inexistant');
    	}
    	$this->get('patlenain_videotek.genre_manager')->deleteGenre($genre);
    	return array('success' => true, 'message' => "Genre supprimé");
    }
}