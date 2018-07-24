<?php
namespace App;

use Illuminate\Notifications\Notifiable;
use Jenssegers\Mongodb\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    
    protected $collection = 'users';
    protected $fillable = ['name', 'email', 'password'];
}
