import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import actionTypes from '../action-types';
import setSessions from '../actions/sessions/setSessions';

const data = [
  {
    'id': '5f0d8a56dbef4d5af60f3e8f',
    'customer': {
      'name': 'De Fontein Bussum',
    },
    'user': {
      'id': 0,
      'name': 'Buckley Cohen',
      'role': 'teacher',
    },
    'created_at': 'Wednesday, March 11, 2020 7:44 PM',
  },
  {
    'id': '5f0d8a5634e3208948072b4f',
    'customer': {
      'name': 'De Middelbare',
    },
    'user': {
      'id': 1,
      'name': 'Henson Bryan',
      'role': 'teacher',
    },
    'created_at': 'Friday, August 29, 2014 11:51 PM',
  },
  {
    'id': '5f0d8a56edabbf878f3afa1b',
    'customer': {
      'name': 'MAVO 2020',
    },
    'user': {
      'id': 2,
      'name': 'Avis Walsh',
      'role': 'student',
    },
    'created_at': 'Thursday, November 19, 2015 5:46 AM',
  },
  {
    'id': '5f0d8a56ccaa98792a47566b',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 3,
      'name': 'Norma Ball',
      'role': 'student',
    },
    'created_at': 'Sunday, July 7, 2019 5:00 AM',
  },
  {
    'id': '5f0d8a5649bcb23628d1ea8a',
    'customer': {
      'name': 'MAVO 2020',
    },
    'user': {
      'id': 4,
      'name': 'Mckenzie Gross',
      'role': 'teacher',
    },
    'created_at': 'Monday, April 7, 2014 2:54 PM',
  },
  {
    'id': '5f0d8a5667ba3b019fe7b238',
    'customer': {
      'name': 'De lage zwaluw',
    },
    'user': {
      'id': 5,
      'name': 'Yvette Nguyen',
      'role': 'student',
    },
    'created_at': 'Thursday, September 14, 2017 2:36 AM',
  },
  {
    'id': '5f0d8a561aec0c364ba39d62',
    'customer': {
      'name': 'De Middelbare',
    },
    'user': {
      'id': 6,
      'name': 'Kimberley Ayers',
      'role': 'student',
    },
    'created_at': 'Friday, October 2, 2015 3:45 PM',
  },
  {
    'id': '5f0d8a56052f40400486199f',
    'customer': {
      'name': 'De Middelbare',
    },
    'user': {
      'id': 7,
      'name': 'Sofia Barr',
      'role': 'parent',
    },
    'created_at': 'Thursday, June 4, 2015 5:37 AM',
  },
  {
    'id': '5f0d8a561a40ca27b5ce147d',
    'customer': {
      'name': 'De Fontein Bussum',
    },
    'user': {
      'id': 8,
      'name': 'Barton Matthews',
      'role': 'student',
    },
    'created_at': 'Monday, July 13, 2020 12:34 PM',
  },
  {
    'id': '5f0d8a56973986d37f6fa39e',
    'customer': {
      'name': 'Het Gezellige Schooltje',
    },
    'user': {
      'id': 9,
      'name': 'Bowers Reynolds',
      'role': 'parent',
    },
    'created_at': 'Tuesday, December 3, 2019 2:31 AM',
  },
  {
    'id': '5f0d8a56e99af296eb13921a',
    'customer': {
      'name': 'De Fontein Bussum',
    },
    'user': {
      'id': 10,
      'name': 'Mollie Dudley',
      'role': 'student',
    },
    'created_at': 'Sunday, December 31, 2017 6:01 PM',
  },
  {
    'id': '5f0d8a5671341cbc5c283b10',
    'customer': {
      'name': 'MAVO 2020',
    },
    'user': {
      'id': 11,
      'name': 'Gardner Hess',
      'role': 'parent',
    },
    'created_at': 'Monday, March 13, 2017 2:07 PM',
  },
  {
    'id': '5f0d8a56a04b9c64c3d5c82d',
    'customer': {
      'name': 'MAVO 2020',
    },
    'user': {
      'id': 12,
      'name': 'Graves Peterson',
      'role': 'teacher',
    },
    'created_at': 'Tuesday, July 4, 2017 2:07 AM',
  },
  {
    'id': '5f0d8a565d95a18c62c89b09',
    'customer': {
      'name': 'MAVO 2020',
    },
    'user': {
      'id': 13,
      'name': 'Glenna Daniels',
      'role': 'teacher',
    },
    'created_at': 'Monday, April 8, 2019 5:55 AM',
  },
  {
    'id': '5f0d8a56c662627eed00d639',
    'customer': {
      'name': 'MAVO 2020',
    },
    'user': {
      'id': 14,
      'name': 'Freeman Pratt',
      'role': 'student',
    },
    'created_at': 'Saturday, July 1, 2017 5:36 AM',
  },
  {
    'id': '5f0d8a56d5e62168170bcac1',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 15,
      'name': 'Linda Perry',
      'role': 'teacher',
    },
    'created_at': 'Wednesday, September 3, 2014 9:27 AM',
  },
  {
    'id': '5f0d8a56e2ba94fab916ec44',
    'customer': {
      'name': 'De lage zwaluw',
    },
    'user': {
      'id': 16,
      'name': 'Katheryn Pace',
      'role': 'teacher',
    },
    'created_at': 'Monday, November 28, 2016 7:43 PM',
  },
  {
    'id': '5f0d8a560fbe6d2af817cedc',
    'customer': {
      'name': 'De lage zwaluw',
    },
    'user': {
      'id': 17,
      'name': 'Phillips Miller',
      'role': 'student',
    },
    'created_at': 'Wednesday, April 1, 2020 4:42 PM',
  },
  {
    'id': '5f0d8a5689a16d8609f4323e',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 18,
      'name': 'Danielle Hester',
      'role': 'student',
    },
    'created_at': 'Tuesday, January 15, 2019 6:35 PM',
  },
  {
    'id': '5f0d8a565cd2595a0f964012',
    'customer': {
      'name': 'De Middelbare',
    },
    'user': {
      'id': 19,
      'name': 'Kirby Rosa',
      'role': 'student',
    },
    'created_at': 'Thursday, April 20, 2017 10:01 PM',
  },
  {
    'id': '5f0d8a5608e1fccd3f79162d',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 20,
      'name': 'Earline Mccray',
      'role': 'student',
    },
    'created_at': 'Monday, July 11, 2016 1:58 PM',
  },
  {
    'id': '5f0d8a563f2f0bf720598290',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 21,
      'name': 'Fleming Lopez',
      'role': 'teacher',
    },
    'created_at': 'Tuesday, June 24, 2014 3:42 AM',
  },
  {
    'id': '5f0d8a5649772c9a0013357e',
    'customer': {
      'name': 'De Middelbare',
    },
    'user': {
      'id': 22,
      'name': 'Tricia Sheppard',
      'role': 'parent',
    },
    'created_at': 'Thursday, August 31, 2017 5:44 AM',
  },
  {
    'id': '5f0d8a56d6be7511d7dddc1e',
    'customer': {
      'name': 'De Fontein Bussum',
    },
    'user': {
      'id': 23,
      'name': 'Bauer Hurley',
      'role': 'teacher',
    },
    'created_at': 'Thursday, November 26, 2015 1:16 AM',
  },
  {
    'id': '5f0d8a566bdbc04ca3e32345',
    'customer': {
      'name': 'Het Gezellige Schooltje',
    },
    'user': {
      'id': 24,
      'name': 'Teri Cardenas',
      'role': 'student',
    },
    'created_at': 'Sunday, December 14, 2014 8:02 PM',
  },
  {
    'id': '5f0d8a56b2c92e11a16afb72',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 25,
      'name': 'Sadie Miranda',
      'role': 'student',
    },
    'created_at': 'Tuesday, October 15, 2019 10:44 AM',
  },
  {
    'id': '5f0d8a569545c7e056f5a469',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 26,
      'name': 'Mason Mendez',
      'role': 'teacher',
    },
    'created_at': 'Friday, January 31, 2020 8:52 AM',
  },
  {
    'id': '5f0d8a5623002d1a5ca90ecf',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 27,
      'name': 'Byrd Dunlap',
      'role': 'parent',
    },
    'created_at': 'Friday, October 18, 2019 8:40 AM',
  },
  {
    'id': '5f0d8a56dd0a1677735f82b2',
    'customer': {
      'name': 'De lage zwaluw',
    },
    'user': {
      'id': 28,
      'name': 'Melisa Lynch',
      'role': 'parent',
    },
    'created_at': 'Monday, March 16, 2020 8:34 AM',
  },
  {
    'id': '5f0d8a56fdf35b0dc926a34b',
    'customer': {
      'name': 'Het Gezellige Schooltje',
    },
    'user': {
      'id': 29,
      'name': 'Chen Frazier',
      'role': 'parent',
    },
    'created_at': 'Friday, December 4, 2015 6:17 AM',
  },
  {
    'id': '5f0d8a56cb3aa7f23f7df0bf',
    'customer': {
      'name': 'De Middelbare',
    },
    'user': {
      'id': 30,
      'name': 'Ortiz Glover',
      'role': 'teacher',
    },
    'created_at': 'Friday, November 2, 2018 1:12 AM',
  },
  {
    'id': '5f0d8a569858ccbac6dd40ee',
    'customer': {
      'name': 'MAVO 2020',
    },
    'user': {
      'id': 31,
      'name': 'Wolf Cortez',
      'role': 'student',
    },
    'created_at': 'Saturday, July 20, 2019 4:49 PM',
  },
  {
    'id': '5f0d8a56a1beb2e1cbff1ca3',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 32,
      'name': 'Claudia Leonard',
      'role': 'parent',
    },
    'created_at': 'Monday, April 13, 2020 3:51 PM',
  },
  {
    'id': '5f0d8a56d39ef19b10e03f02',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 33,
      'name': 'Martina Curry',
      'role': 'teacher',
    },
    'created_at': 'Monday, January 12, 2015 12:06 AM',
  },
  {
    'id': '5f0d8a5673fc000f1ec95242',
    'customer': {
      'name': 'Het Gezellige Schooltje',
    },
    'user': {
      'id': 34,
      'name': 'Kristina Butler',
      'role': 'parent',
    },
    'created_at': 'Monday, February 8, 2016 7:35 AM',
  },
  {
    'id': '5f0d8a56c82ffc491e11ab59',
    'customer': {
      'name': 'De Fontein Bussum',
    },
    'user': {
      'id': 35,
      'name': 'Tracy Wyatt',
      'role': 'parent',
    },
    'created_at': 'Saturday, March 1, 2014 5:24 PM',
  },
  {
    'id': '5f0d8a5625dd93bea2b95fe3',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 36,
      'name': 'Foley Wooten',
      'role': 'student',
    },
    'created_at': 'Wednesday, April 12, 2017 9:38 AM',
  },
  {
    'id': '5f0d8a56296327d5a9427926',
    'customer': {
      'name': 'Het Gezellige Schooltje',
    },
    'user': {
      'id': 37,
      'name': 'Terrie Howard',
      'role': 'student',
    },
    'created_at': 'Sunday, May 11, 2014 2:14 AM',
  },
  {
    'id': '5f0d8a56f5b46a531bd6398e',
    'customer': {
      'name': 'De Middelbare',
    },
    'user': {
      'id': 38,
      'name': 'Augusta Johns',
      'role': 'student',
    },
    'created_at': 'Thursday, March 7, 2019 7:17 PM',
  },
  {
    'id': '5f0d8a56d0a3abb4b1c0b056',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 39,
      'name': 'Kim Yates',
      'role': 'student',
    },
    'created_at': 'Tuesday, May 12, 2015 12:19 AM',
  },
  {
    'id': '5f0d8a5603180d24be8d2b04',
    'customer': {
      'name': 'De Middelbare',
    },
    'user': {
      'id': 40,
      'name': 'Lorrie Carter',
      'role': 'teacher',
    },
    'created_at': 'Tuesday, November 4, 2014 8:06 AM',
  },
  {
    'id': '5f0d8a561d8a61aebb8c582c',
    'customer': {
      'name': 'CSG De Boei',
    },
    'user': {
      'id': 41,
      'name': 'Glenda Richards',
      'role': 'teacher',
    },
    'created_at': 'Wednesday, February 20, 2019 10:11 AM',
  },
]

const onFetchSessions = function* onFetchSessions() {
  yield takeLatest(actionTypes.SESSIONS.FETCH_SESSIONS, function* onfetchSessions({ meta: { page } }) {
    const limit = 20
    yield put(setSessions(
      [...data].splice((page - 1) * limit, limit),
      {
        total: data.length,
        limit,
        page: Number(page),
      },
    ))
  })
}

export default onFetchSessions
