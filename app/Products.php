<?php
namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Products extends Eloquent
{
  protected $collection = 'products';
  protected $fillable = ['_id', 'name', 'category_id', 'image', 'description'];
}
