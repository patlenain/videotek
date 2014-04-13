<?php
namespace Patlenain\VideotekBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use JMS\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Response;

abstract class JsonController extends Controller{

	/**
	 * @return Serializer
	 */
	function getSerializer() {
		return $this->get('jms_serializer');
	}

	/**
	 * @param mixed $data
	 * @return Response
	 */
	function createJsonResponse($data) {
		return new Response($this->getSerializer()->serialize($data, 'json'),
				200, array('Content-Type' => 'application/json'));
	}
}