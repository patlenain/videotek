<?php
namespace Patlenain\VideotekBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class SupportType extends AbstractType {

	/**
	 * @param FormBuilderInterface $builder
	 * @param array $options
	 */
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
			->add('id', 'integer')
			->add('code', 'text', array(
				'max_length' => 15
			))
			->add('libelle', 'text', array(
				'max_length' => 255
			))
		;								;
	}

	/**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Patlenain\VideotekBundle\Entity\Support'
        ));
    }

    /**
	 * @return string
	 */
	public function getName()
	{
		return 'patlenain_videotekbundle_support';
	}
}