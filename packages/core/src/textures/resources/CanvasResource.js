import BaseImageResource from './BaseImageResource';

/**
 * Resource type for HTMLCanvasElement.
 * @class
 * @extends PIXI.resources.BaseImageResource
 * @memberof PIXI.resources
 * @param {HTMLCanvasElement} source - Canvas element to use
 */
export default class CanvasResource extends BaseImageResource
{
    constructor(source)
    {
        super(source);

        this._loaded = true;
    }

    /**
     * Used to auto-detect the type of resource.
     *
     * @static
     * @param {*} source - The source object
     * @return {boolean} `true` if <canvas>
     */
    static test(source)
    {
        return (source instanceof HTMLCanvasElement);
    }
}
