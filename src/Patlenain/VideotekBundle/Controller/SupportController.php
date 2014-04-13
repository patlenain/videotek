<?php
namespace Patlenain\VideotekBundle\Controller;

use Patlenain\VideotekBundle\Form\SupportType;
use Patlenain\VideotekBundle\Entity\Support;
use Symfony\Component\Routing\Annotation\Route;
use JMS\Serializer\Serializer;

/**
 * @Route("/api/support")
 */
class SupportController extends JsonController {


    /**
     * @Route("/list", name="api_patlenain_videotek_support_list")
     */
    public function listAction() {
		$supports = $this->get('patlenain_videotek.support_manager')->listSupports();
		return $this->createJsonResponse(
				array('success' => true, 'data' => $supports));
    }

    /**
     * @Route("/create", name="api_patlenain_videotek_support_create")
     */
    public function createAction() {
    	$support = new Support();
    	$form = $this->createForm(new SupportType(), $support);
    	$form->submit($this->getRequest()->request->all());
    	if ($form->isValid()) {
    		$this->get('patlenain_videotek.support_manager')->saveSupport($support);
    		return $this->createJsonResponse(array('success' => true, 'support' => $support));
    	}
    	return $this->createJsonResponse(array('success' => false, 'form' => $form));
    }

    /**
     */
    public function getAction($id) {
		$support = $this->get('patlenain_videotek.support_manager')->getSupport($id);
		if (!$support) {
			throw $this->createNotFoundException('Support inexistant');
		}
		return $support;
    }

    /**
     * @Route("/update/{id}", name="api_patlenain_videotek_support_update")
     */
    public function updateAction($id) {
    	$support = $this->get('patlenain_videotek.support_manager')->getSupport($id);
    	if (!$support) {
    		throw $this->createNotFoundException('Support inexistant');
    	}
    	$form = $this->createForm(new SupportType(), $support);
    	$form->submit($this->getRequest()->request->all());
    	if ($form->isValid()) {
    		$this->get('patlenain_videotek.support_manager')->saveSupport($support);
    		return $this->createJsonResponse(array('success' => true, 'support' => $support));
    	}
    	return $this->createJsonResponse(array('success' => false, 'form' => $form));
    }

    /**
     */
    public function deleteAction($id) {
    	$support = $this->get('patlenain_videotek.support_manager')->getSupport($id);
    	if (!$support) {
    		throw $this->createNotFoundException('Support inexistant');
    	}
    	$this->get('patlenain_videotek.support_manager')->deleteSupport($support);
    	return array('success' => true, 'message' => "Support supprimé");
    }
}