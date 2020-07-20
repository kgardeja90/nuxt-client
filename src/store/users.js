import mergeDeep from "@utils/merge-deep";
import serviceTemplate from "@utils/service-template";

const base = serviceTemplate("users");

const module = mergeDeep(base, {
	actions: {
		findStudents({ dispatch }, queryContext = {}) {
			queryContext.customEndpoint = "/users/admin/students";
			return dispatch("find", queryContext);
		},
		createStudent({ dispatch }, queryContext = {}) {
			queryContext.customEndpoint = "/users/admin/students";
			return dispatch("create", queryContext);
		},
		removeStudents({ dispatch }, queryContext = {}) {
			queryContext.customEndpoint = "/users/admin/students";
			return dispatch("remove", queryContext);
		},
		findTeachers({ dispatch }, query = {}) {
			query.customEndpoint = "/users/admin/teachers";
			return dispatch("find", query);
		},
		createTeacher({ dispatch }, queryContext = {}) {
			queryContext.customEndpoint = "/users/admin/teachers";
			return dispatch("create", queryContext);
		},
		removeTeachers({ dispatch }, queryContext = {}) {
			queryContext.customEndpoint = "/users/admin/teachers";
			return dispatch("remove", queryContext);
		},
		sendRegistrationLink(ctx, payload = {}) {
			const customEndpoint = "/users/mail/registrationLink";
			return this.$axios.$post(customEndpoint, payload);
		},
		getByRole: async function (ctx, role) {
			const queryRole = {
				roles: [role._id],
			};

			return (
				await this.dispatch("users/find", {
					query: queryRole,
				})
			).data;
		},
		getById: async function (ctx, id) {
			const queryId = {
				_id: id,
			};

			return (
				await this.dispatch("users/find", {
					query: queryId,
				})
			).data[0];
		},
	},
});

export default module;
