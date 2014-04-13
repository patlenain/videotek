<?php
namespace Patlenain\VideotekBundle\Controller;

use Symfony\Component\Routing\Annotation\Route;
use JMS\Serializer\Serializer;
use Patlenain\VideotekBundle\Entity\Type;
use Patlenain\VideotekBundle\Form\TypeType;

/**
 * @Route("/api/type")
 */
class TypeController extends JsonController {


    /**
     * @Route("/list", name="api_patlenain_videotek_type_list")
     */
    public function listAction() {
		$types = $this->get('patlenain_videotek.type_manager')->listTypes();
		return $this->createJsonResponse(
				array('success' => true, 'data' => $types));
    }

    /**
     * @Route("/create", name="api_patlenain_videotek_type_create")
     */
    public function createAction() {
    	$type = new Type();
    	$form = $this->createForm(new TypeType(), $type);
    	$form->submit($this->getRequest()->request->all());
    	if ($form->isValid()) {
    		$this->get('patlenain_videotek.type_manager')->saveType($type);
    		return $this->createJsonResponse(array('success' => true, 'type' => $type));
    	}
    	return $this->createJsonResponse(array('success' => false, 'form' => $form));
    }

    /**
     */
    public function getAction($id) {
		$type = $this->get('patlenain_videotek.type_manager')->getType($id);
		if (!$type) {
			throw $this->createNotFoundException('Type inexistant');
		}
		return $type;
    }

    /**
     * @Route("/update/{id}", name="api_patlenain_videotek_type_update")
     */
    public function updateAction($id) {
    	$type = $this->get('patlenain_videotek.type_manager')->getType($id);
    	if (!$type) {
    		throw $this->createNotFoundException('Type inexistant');
    	}
    	$form = $this->createForm(new TypeType(), $type);
    	$form->submit($this->getRequest()->request->all());
    	if ($form->isValid()) {
    		$this->get('patlenain_videotek.type_manager')->saveType($type);
    		return $this->createJsonResponse(array('success' => true, 'type' => $type));
    	}
    	return $this->createJsonResponse(array('success' => false, 'form' => $form));
    }

    /**
     */
    public function deleteAction($id) {
    	$type = $this->get('patlenain_videotek.type_manager')->getType($id);
    	if (!$type) {
    		throw $this->createNotFoundException('Type inexistant');
    	}
    	$this->get('patlenain_videotek.type_manager')->deleteType($type);
    	return array('success' => true, 'message' => "Type supprimé");
    }
}