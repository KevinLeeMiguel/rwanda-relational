const locations = require('./static/locations.json').location_data
const { province_t_l, district_t_l, sector_t_l, cell_t_l, village_t_l } = require('./static/type_literals.json')

const generic_sort = (a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase())
        return -1
    if (a.name.toUpperCase() > b.name.toUpperCase())
        return 1
    return 0
}

const app = {

    provinces: (where = {}) => {
        if (where.id)
            return locations.filter(l => l.location_type === province_t_l && l.id == where.id)[0]
        return locations.filter(l => l.location_type === province_t_l).sort(generic_sort)
    },
    districts: (where = {}) => {
        if (where.id)
            return locations.filter(l => l.location_type === district_t_l && l.id == where.id)[0]
        else if (where.parent_id)
            return locations.filter(l => l.location_type === district_t_l && l.parent_id === where.parent_id).sort(generic_sort)
        return locations.filter(l => l.location_type === district_t_l).sort(generic_sort)
    },
    sectors: (where = {}) => {
        if (where.id)
            return locations.filter(l => l.location_type === sector_t_l && l.id == where.id)[0]
        else if (where.parent_id)
            return locations.filter(l => l.location_type === sector_t_l && l.parent_id === where.parent_id).sort(generic_sort)
        return locations.filter(l => l.location_type === sector_t_l).sort(generic_sort)
    },
    cells: (where = {}) => {
        if (where.id)
            return locations.filter(l => l.location_type === cell_t_l && l.id == where.id)[0]
        else if (where.parent_id)
            return locations.filter(l => l.location_type === cell_t_l && l.parent_id === where.parent_id).sort(generic_sort)
        return locations.filter(l => l.location_type === cell_t_l).sort(generic_sort)
    },
    villages: (where = {}) => {
        if (where.id)
            return locations.filter(l => l.location_type === village_t_l && l.id == where.id)[0]
        else if (where.parent_id)
            return locations.filter(l => l.location_type === village_t_l && l.parent_id === where.parent_id).sort(generic_sort)
        return locations.filter(l => l.location_type === village_t_l).sort(generic_sort)
    },
    all: (where = {}) => {
        if (where.id)
            return locations.filter(l => l.id == where.id)[0]
        return locations
    }

}

module.exports = app
