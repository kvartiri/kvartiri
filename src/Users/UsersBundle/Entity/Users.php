<?php

namespace Users\UsersBundle\Entity;

use FOS\UserBundle\Entity\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="users")
 */
class Users extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    public function __construct()
    {
        parent::__construct();
//        $this->guest = new \Doctrine\Common\Collections\ArrayCollection();
//        $this->company = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * @ORM\OneToOne(targetEntity="Kvartiri\KvartiriBundle\Entity\Guests", mappedBy="user", cascade={"remove"})
     * @ORM\JoinColumn(nullable=true)
     */
    private $guest;

    /**
     * @ORM\OneToOne(targetEntity="Kvartiri\KvartiriBundle\Entity\Companies", mappedBy="user", cascade={"remove"})
     * @ORM\JoinColumn(nullable=true)
     */
    private $company;



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
     * Set guest
     *
     * @param \Kvartiri\KvartiriBundle\Entity\Guests $guest
     * @return Users
     */
    public function setGuest(\Kvartiri\KvartiriBundle\Entity\Guests $guest = null)
    {
        $this->guest = $guest;

        return $this;
    }

    /**
     * Get guest
     *
     * @return \Kvartiri\KvartiriBundle\Entity\Guests 
     */
    public function getGuest()
    {
        return $this->guest;
    }
}
