<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Categories extends Eloquent
{
  protected $collection = 'categories';
  protected $fillable = ['_id', 'name', 'image', 'description'];
}
