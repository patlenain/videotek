<?php
namespace Patlenain\VideotekBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\Prefix;
use FOS\RestBundle\Controller\Annotations\RouteResource;
use FOS\RestBundle\Controller\Annotations\NamePrefix;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\View;
use Patlenain\VideotekBundle\Form\SupportType;
use Patlenain\VideotekBundle\Entity\Support;

/**
 * @NamePrefix("api_patlenain_videotek_")
 * @RouteResource("Support")
 * @Prefix("/api")
 */
class SupportController extends FOSRestController {

    /**
     * @View()
     */
    public function cgetAction() {
		$supports = $this->get('patlenain_videotek.support_manager')->listSupports();
		return array('success' => true, 'data' => $supports);
    }

    /**
     * @View
     */
    public function cpostAction() {
    	$support = new Support();
    	$form = $this->createForm(new SupportType(), $support);
    	$form->submit($this->getRequest()->request->all());
    	if ($form->isValid()) {
    		$this->get('patlenain_videotek.support_manager')->saveSupport($support);
    		return array('success' => true, 'support' => $support);
    	}
    	return array('success' => false, 'message' => $form->getErrorsAsString());
    }

    /**
     * @View
     */
    public function getAction($id) {
		$support = $this->get('patlenain_videotek.support_manager')->getSupport($id);
		if (!$support) {
			throw $this->createNotFoundException('Support inexistant');
		}
		return $support;
    }

    /**
     * @View
     */
    public function putAction($id) {
    	$support = $this->get('patlenain_videotek.support_manager')->getSupport($id);
    	if (!$support) {
    		throw $this->createNotFoundException('Support inexistant');
    	}
    	$form = $this->createForm(new SupportType(), $support);
    	$form->submit($this->getRequest()->request->all());
    	if ($form->isValid()) {
    		$this->get('patlenain_videotek.support_manager')->saveSupport($support);
    		return array('success' => true, 'support' => $support);
    	}
    	return array('success' => false, 'message' => $form->getErrorsAsString());
    }
}