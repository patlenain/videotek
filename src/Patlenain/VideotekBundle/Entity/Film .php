<?php

namespace Patlenain\VideotekBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints;

/**
 * Film
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Patlenain\VideotekBundle\Entity\Film Repository")
 */
class Film
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="titre", type="string", length=50)
     * @Constraints\NotBlank
     * @Constraints\Length(max="50")
     */
    private $titre;

    /**
     * @var string
     *
     * @ORM\Column(name="sousTitre", type="string", length=50, nullable=true)
     * @Constraints\Length(max="50")
     */
    private $sousTitre;

    /**
     * @var integer
     *
     * @ORM\Column(name="anneeSortie", type="integer")
     * @Constraints\NotNull
     */
    private $anneeSortie;

    /**
     * @var string
     *
     * @ORM\Column(name="resume", type="text", nullable=true)
     */
    private $resume;

    /**
     * @var Type
     *
     * @ORM\ManyToOne(targetEntity="Type")
     * @ORM\JoinColumn(name="type_id", referencedColumnName="id", nullable=false)
     * @Constraints\NotNull
     */
    private $type;

    /**
     * @var Support
     *
     * @ORM\ManyToOne(targetEntity="Support")
     * @ORM\JoinColumn(name="support_id", referencedColumnName="id", nullable=false)
     * @Constraints\NotNull
     */
    private $support;

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set titre
     *
     * @param string $titre
     * @return Film
     */
    public function setTitre($titre)
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * Get titre
     *
     * @return string
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * Set sousTitre
     *
     * @param string $sousTitre
     * @return Film
     */
    public function setSousTitre($sousTitre)
    {
        $this->sousTitre = $sousTitre;

        return $this;
    }

    /**
     * Get sousTitre
     *
     * @return string
     */
    public function getSousTitre()
    {
        return $this->sousTitre;
    }

    /**
     * Set anneeSortie
     *
     * @param integer $anneeSortie
     * @return Film
     */
    public function setAnneeSortie($anneeSortie)
    {
        $this->anneeSortie = $anneeSortie;

        return $this;
    }

    /**
     * Get anneeSortie
     *
     * @return integer
     */
    public function getAnneeSortie()
    {
        return $this->anneeSortie;
    }

    /**
     * Set resume
     *
     * @param string $resume
     * @return Film
     */
    public function setResume($resume)
    {
        $this->resume = $resume;

        return $this;
    }

    /**
     * Get resume
     *
     * @return string
     */
    public function getResume()
    {
        return $this->resume;
    }

    /**
     * Set support
     *
     * @param Support $support
     * @return Film
     */
    public function setSupport($support)
    {
    	$this->support = $support;

    	return $this;
    }

    /**
     * Get support
     *
     * @return Support
     */
    public function getSupport()
    {
    	return $this->support;
    }

    /**
     * Set type
     *
     * @param Type $type
     * @return Film
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return Type
     */
    public function getType()
    {
        return $this->type;
    }
}
